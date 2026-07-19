let map,
  service,
  infoWindow,
  markers = [],
  locationMarker = null,
  locationCircle = null;
let directionsService, directionsRenderer;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.2105, lng: 101.9758 },
    zoom: 6,
  });

  service = new google.maps.places.PlacesService(map);
  infoWindow = new google.maps.InfoWindow();

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    panel: document.getElementById("directionsPanel"),
  });
}

// Display food cards
function showFoods(places) {
  const grid = $("#foodGrid");
  grid.empty();
  places.forEach((place) => {
    const photoUrl = place.photos
      ? place.photos[0].getUrl({ maxWidth: 200 })
      : "../Images/nophoto.jpg";
    const ratingText = place.rating ? `Rating: ${place.rating} ⭐` : "";
    const card = $(`
      <div class="food-card">
        
        <img src="${photoUrl}" alt="${place.name}">
        <div class="content">
          <h3>${place.name}</h3>
          <p>${place.vicinity || place.formatted_address}</p>
          <p>${ratingText}</p>
        </div>
      </div>
    `);
    grid.append(card);
  });
}

// Clear markers and location marker/circle
function clearMarkers() {
  markers.forEach((m) => m.setMap(null));
  markers = [];
  if (locationMarker) locationMarker.setMap(null);
  if (locationCircle) locationCircle.setMap(null);
}

// Add radius circle
function addRadiusCircle(center, radiusMeters) {
  if (locationCircle) locationCircle.setMap(null);
  locationCircle = new google.maps.Circle({
    strokeColor: "#0055ffff",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#4fe2ffd2",
    fillOpacity: 0.2,
    map: map,
    center: center,
    radius: radiusMeters,
  });
  map.fitBounds(locationCircle.getBounds());
}

// Fetch nearby places
function fetchPlaces(
  location,
  keyword = "street food OR hawker OR local food",
  radiusKm = 5
) {
  const request = {
    location: location,
    radius: radiusKm * 1000,
    keyword: keyword,
  };

  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearMarkers();

      // Add marker for searched/current location
      locationMarker = new google.maps.Marker({
        map: map,
        position: location,
        title: "Search Location",
        icon: {
          url: "../Images/youarehere.png", // use your custom icon
          scaledSize: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 40),
        },
      });

      // Add radius circle
      const radiusMeters = parseInt($("#radiusSelect").val()) || 5000;
      addRadiusCircle(location, radiusMeters);

      // Sort by rating and take top 15
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      const topResults = results.slice(0, 15);
      showFoods(topResults);

      topResults.forEach((place) => {
        const marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
          icon: {
            url: "../Images/red-pin.png", // <-- your custom pin path
            scaledSize: new google.maps.Size(40, 40), // Resize pin
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(20, 40), // Ensures the tip touches the location
          },
        });

        marker.addListener("click", () => {
          const ratingText = place.rating ? `Rating: ${place.rating} ⭐` : "";
          infoWindow.setContent(`
            <strong>${place.name}</strong><br>
            ${place.vicinity || place.formatted_address}<br>
            ${ratingText}<br>
            <button id="getDirBtn" style="margin-top:5px;">Get Directions</button>
          `);
          infoWindow.open(map, marker);

          google.maps.event.addListenerOnce(infoWindow, "domready", () => {
            document
              .getElementById("getDirBtn")
              .addEventListener("click", () => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => {
                      const userLoc = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                      };
                      showDirections(userLoc, place.geometry.location);
                    },
                    () => alert("Unable to access your location.")
                  );
                } else alert("Geolocation not supported.");
              });
          });
        });

        markers.push(marker);
      });
    } else {
      alert("No places found nearby.");
    }
  });
}

// Show directions
function showDirections(start, end) {
  directionsService.route(
    {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === "OK") directionsRenderer.setDirections(result);
      else alert("Directions request failed: " + status);
    }
  );
}

// Perform search (by location input or LatLng)
function performSearch(location = null) {
  const keyword =
    $("#keywordInput").val() || "street food OR hawker OR local food";
  const radiusMeters = parseInt($("#radiusSelect").val()) || 5000;

  if (location) {
    // ✅ If location is passed directly (LatLng from city card, current location, etc.)
    fetchPlaces(location, keyword, radiusMeters / 1000);
    map.setCenter(location);
    map.setZoom(13);

    // ✅ Get readable address and update header
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location }, (results, status) => {
      if (status === "OK" && results[0]) {
        $("#currentLocationHeader")
          .text(`📍 Showing results near: ${results[0].formatted_address}`)
          .fadeIn();
      }
    });
  } else {
    // ✅ If user typed into the search box
    const query = $("#locationInput").val().trim();
    if (!query) return alert("Please enter a location.");

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: query + ", Malaysia" }, (results, status) => {
      if (status === "OK" && results[0]) {
        const loc = results[0].geometry.location;

        // ✅ Update header immediately
        $("#currentLocationHeader")
          .text(`📍 Showing results near: ${results[0].formatted_address}`)
          .fadeIn();

        fetchPlaces(loc, keyword, radiusMeters / 1000);
        map.setCenter(loc);
        map.setZoom(13);
      } else {
        alert("Location not found.");
      }
    });
  }
}

$(document).ready(() => {
  // Search button & filter button
  $("#searchBtn, #filterBtn").click(() => performSearch());

  // Toggle filter panel
  $("#toggleFilter").click((e) => {
    e.preventDefault();
    $("#filterPanel").slideToggle(200);
    const isVisible = $("#filterPanel").is(":visible");
    $("#toggleFilter").text(isVisible ? "☰" : "☰");
  });

  // Current location
  $("#currentLocationBtn").click(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const userLoc = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };

          // Reverse Geocode to get human-readable address
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: userLoc }, (results, status) => {
            if (status === "OK" && results[0]) {
              const address = results[0].formatted_address;

              // Show the location header above results
              $("#currentLocationHeader")
                .text(`📍 Showing results near: ${address}`)
                .fadeIn();
            } else {
              $("#currentLocationHeader")
                .text("📍 Showing results near your location")
                .fadeIn();
            }
          });

          // Re-run your nearby search
          performSearch(userLoc);
        },
        () => alert("Unable to access your location.")
      );
    } else {
      alert("Geolocation is not supported on this browser.");
    }
  });

  // City cards click
  $(".city-card").click(function () {
    const city = $(this).data("city"); // Example: "Ipoh"
    const lat = parseFloat($(this).data("lat"));
    const lng = parseFloat($(this).data("lng"));
    const location = { lat, lng };

    // Update current location header instantly
    $("#currentLocationHeader")
      .text(`📍 Showing results near: ${city}`)
      .fadeIn();

    // Center map to selected city
    map.setCenter(location);
    map.setZoom(13);

    // Fetch nearby places based on selected city
    fetchPlaces(location);
  });
});

function getLocationName(latLng, callback) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: latLng }, (results, status) => {
    if (status === "OK" && results[0]) {
      callback(results[0].formatted_address);
    } else {
      callback("Unknown Location");
    }
  });
}

function searchLocation() {
  const address = document.getElementById("locationInput").value.trim();
  if (!address) return alert("Please enter a location.");

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK" && results[0]) {
      const location = results[0].geometry.location;
      const formattedAddress = results[0].formatted_address;

      // ✅ Update header
      $("#currentLocationHeader")
        .text(`📍 Showing results near: ${formattedAddress}`)
        .fadeIn();

      // ✅ Center map and fetch places
      map.setCenter(location);
      map.setZoom(13);
      fetchPlaces(location);
    } else {
      alert("Location not found. Try again.");
    }
  });
}

fetch('../HTML/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const locationHistoryBox = document.getElementById("location-history-box");

    // Load location search history from sessionStorage
    let locationHistory = JSON.parse(sessionStorage.getItem("locationSearchHistory")) || [];

    // Render location search history dropdown
    function renderLocationHistory(filter = "") {
        const filtered = locationHistory.filter(item =>
            item.toLowerCase().includes(filter.toLowerCase())
        );

        if (filtered.length === 0) {
            locationHistoryBox.style.display = "none";
            return;
        }

        locationHistoryBox.innerHTML = filtered.map((item, index) => `
            <div class="history-item">
                <span class="history-text">${item}</span>
                <button class="delete-btn" data-index="${locationHistory.indexOf(item)}">✕</button>
            </div>
        `).join("");

        locationHistoryBox.style.display = "block";
    }

    // Save location search history
    function saveLocationHistory() {
        sessionStorage.setItem("locationSearchHistory", JSON.stringify(locationHistory));
    }

    // Add new location search term
    locationInput.addEventListener("change", function () {
        const value = locationInput.value.trim();
        if (value && !locationHistory.includes(value)) {
            locationHistory.unshift(value);
            if (locationHistory.length > 10) locationHistory.pop();
            saveLocationHistory();
        }
    });

    // Show location history when focusing the input
    locationInput.addEventListener("focus", function () {
        renderLocationHistory(locationInput.value);
    });

    // Filter location history while typing
    locationInput.addEventListener("input", function () {
        renderLocationHistory(locationInput.value);
    });

    // Autofill when clicking a history item
    locationHistoryBox.addEventListener("click", function (e) {
        if (e.target.classList.contains("history-text")) {
            locationInput.value = e.target.textContent;
            locationHistoryBox.style.display = "none";
        }
    });

    // Delete a single location history item
    locationHistoryBox.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.dataset.index;
            locationHistory.splice(index, 1);
            saveLocationHistory();
            renderLocationHistory(locationInput.value);
        }
    });

    // Hide history when clicking outside
    document.addEventListener("click", function (e) {
        if (!locationHistoryBox.contains(e.target) && e.target !== locationInput) {
            locationHistoryBox.style.display = "none";
        }
    });
});
