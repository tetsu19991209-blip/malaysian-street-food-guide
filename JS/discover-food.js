let placesService;
let selectedFood = "";

// Load footer dynamically
fetch("../HTML/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

// Called by Google Maps API when loaded
function initMap() {
  const map = new google.maps.Map(document.createElement("div"));
  placesService = new google.maps.places.PlacesService(map);
}

// ============================
// Document Ready
// ============================
$(document).ready(function () {
  // ============================
  // Category Click - Show Panel with Typing
  // ============================
  $(".category-btn").click(function () {
    selectedFood = $(this).data("keyword");
    const desc = $(this).data("desc");
    const img = $(this).find("img").attr("src");

    // Update food info panel
    $("#foodInfoTitle").text(selectedFood);
    $("#foodInfoImg").attr("src", img);

    // Show knowledge panel
    const panel = $("#foodInfo");
    panel.css("display", "flex");
    setTimeout(() => panel.addClass("show"), 50);

    // Typing effect for description
    typeDescription($("#foodInfoDesc"), desc);

    // Hide previous search results
    $("#foodGrid").hide();
  });

  // ============================
  // Discover Nearby Button
  // ============================
  $("#discoverNearbyBtn").click(function () {
    if (!selectedFood) return alert("Please select a food first.");

    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by this browser.");
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLocation = new google.maps.LatLng(
          pos.coords.latitude,
          pos.coords.longitude
        );
        searchNearbyPlaces(userLocation, selectedFood);
      },
      () => alert("Failed to get your location.")
    );
  });

  // ============================
  // Carousel Controls
  // ============================
  const track = document.querySelector(".food-carousel-track");
  const prev = document.querySelector(".carousel-prev");
  const next = document.querySelector(".carousel-next");
  const scrollAmount = 260; // approximate card width + gap

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

// ============================
// Search Nearby Places
// ============================
function searchNearbyPlaces(location, keyword) {
  if (!placesService) return alert("Places service not initialized.");

  const request = {
    location,
    radius: 5000,
    keyword,
  };

  const grid = $("#foodGrid");
  grid.empty().show(); // Always show grid immediately

  // Disable button to prevent overlapping requests
  $("#discoverNearbyBtn").prop("disabled", true);

  placesService.nearbySearch(request, (results, status) => {
    $("#discoverNearbyBtn").prop("disabled", false);

    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      results.length > 0
    ) {
      results.forEach((place) => {
        const photoUrl =
          place.photos && place.photos.length > 0
            ? place.photos[0].getUrl({ maxWidth: 300 })
            : "../Images/nophoto.jpg";

        const placeCard = `
          <div class="food-card">
            <img src="${photoUrl}" alt="${place.name}" class="food-img"
                 onerror="this.src='../Images/nophoto.jpg'">
            <div class="food-content">
              <h5>${place.name}</h5>
              <p class="text-muted">${place.vicinity || "No address available"}</p>
            </div>
          </div>
        `;

        grid.append(placeCard);
      });
    } else {
      grid.html(
        "<p class='text-center text-muted'>No results found nearby.</p>"
      );
    }

    grid.slideDown(); // Show results grid
  });
}

// ============================
// Hide Knowledge Panel
// ============================
function hideKnowledgePanel() {
  const panel = $("#foodInfo");
  panel.removeClass("show");
  setTimeout(() => panel.css("display", "none"), 400);
}

// ============================
// Typing Effect
// ============================
function typeDescription(element, text, speed = 30) {
  element.text("");
  let i = 0;

  const typingInterval = setInterval(() => {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}
