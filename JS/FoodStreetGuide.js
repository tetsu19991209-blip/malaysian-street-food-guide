//search function
const searchBar = document.getElementById("search-bar");
const streetScroll = document.querySelector(".street-scroll");
const streetCards = Array.from(document.querySelectorAll(".street-card"));

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();

  //clear the container
  streetScroll.innerHTML = "";

  if (!query) {
    // all street display by default
    streetCards.forEach((card) => streetScroll.appendChild(card));
  } else {
    // arrange according alphabet
    const filtered = streetCards
      .filter((card) =>
        card.querySelector("p").innerText.toLowerCase().includes(query)
      )
      .sort((a, b) => {
        // match alphabet will arrange in front, match alphabet but in behind will arrange to back
        const textA = a.querySelector("p").innerText.toLowerCase();
        const textB = b.querySelector("p").innerText.toLowerCase();
        return textA.indexOf(query) - textB.indexOf(query);
      });

    filtered.forEach((card) => streetScroll.appendChild(card));
  }
});

// descriiption of each street
const streets = {
  "Jonker Street": {
    img: "../Chong Zhi Cong/images/3.3.1.jonker.jpg",
    state: "Melaka",
    tag: `Jonker Street, Jonker Walk or Jalan Hang Jebat, is the centrepiece to Melaka's Chinatown and is one of the state's most popular attractions. Previously most known for selling antiques, Jonker Street has grown into a unique cultural melting pot of historical landmarks, local handicrafts, delicious street food and vibrant night market. Visitors come to explore its charming pre-war street houses and experience the traditional flavours of Melaka's Baba Nyonya heritage, all the while shopping for local souvenirs, clothing, jewellery and other trinkets.`,
  },
  "Jalan Alor": {
    img: "../Chong Zhi Cong/images/3.3.2.jalanalor.jpg",
    state: "Kuala Lumpur",
    tag: `Jalan Alor is a vibrant, hawker-style food street in Kuala Lumpur's Bukit Bintang entertainment district, famous for its wide variety of affordable Malay and Thai-influenced seafood, grilled items, satay, char kway teow, and desserts like coconut ice cream. The street comes alive in the evenings when it's packed with illuminated stalls and attracts both locals and tourists seeking an authentic Malaysian street food experience.`,
  },
  "Gurney Drive": {
    img: "../Chong Zhi Cong/images/3.3.3gurney.jpg",
    state: "Penang",
    tag: `Gurney Drive is one of Penang's most famous seafront esplanades, well-known for its bustling hawker centre. Visitors can savour Penang specialties such as char kway teow, Penang laksa, rojak and grilled seafood. The lively night food stalls create an authentic Malaysian dining atmosphere by the sea.`,
  },
  "Chulia Street": {
    img: "../Chong Zhi Cong/images/3.3.4chulia.jpg",
    state: "Penang",
    tag: `Chulia Street in George Town is a historic road filled with backpacker hostels, cafés, and a vibrant food scene. At night, the street transforms into a food haven offering wonton mee, curry mee, and famous Penang street snacks. Its mix of culture and culinary delights makes it a must-visit for both locals and tourists.`,
  },
  "SS2 Night Market": {
    img: "../Chong Zhi Cong/images/2.5.ss2.jpg",
    state: "Selangor",
    tag: `The SS2 Night Market in Petaling Jaya is one of the largest pasar malam in Malaysia, held every Monday night. It offers an extensive range of local delicacies, fresh fruits, bubble tea, and Taiwanese-inspired street food. Beyond food, visitors can also browse clothing, accessories, and household goods at bargain prices.`,
  },
  "Jalan Yang Kalsom": {
    img: "../Chong Zhi Cong/images/3.3.6yangkalsom.jpg",
    state: "Perak (Ipoh)",
    tag: `Jalan Yang Kalsom in Ipoh is a local food hotspot known for its late-night hawker stalls. Popular offerings include satay, noodle soups, and Ipoh’s signature white coffee. The casual, open-air atmosphere makes it a great place to experience authentic local flavours.`,
  },
  "Jalan Wong Ah Fook": {
    img: "../Chong Zhi Cong/images/3.3.7.WongAhFook.jpg",
    state: "Johor",
    tag: `Jalan Wong Ah Fook is Johor Bahru's main thoroughfare and a lively food destination. The area is famous for local hawker fare, seafood, and traditional kopitiams. Its close proximity to the JB Sentral makes it a convenient stop for both locals and Singaporean visitors.`,
  },
  "New Lane Street Food": {
    img: "../Chong Zhi Cong/images/3.3.8newlane.jpg",
    state: "Penang",
    tag: `New Lane Street Food in George Town is one of Penang's top night food spots. It features famous dishes like char koay kak (fried radish cake), Penang curry mee, and oyster omelette. The street comes alive after sunset, offering a true taste of Penang street dining.`,
  },
  "Petaling Street": {
    img: "../Chong Zhi Cong/images/3.3.9petalingstreet.jpg",
    state: "Kuala Lumpur",
    tag: `Petaling Street is the heart of Kuala Lumpur's Chinatown, bustling with market stalls, food vendors, and bargain shopping. It is famous for local street food such as claypot chicken rice, char kway teow, and herbal drinks. The lively mix of culture, flavours, and night market energy makes it a tourist favourite.`,
  },
  "Gerbang Malam": {
    img: "../Chong Zhi Cong/images/3.3.10gerbang.jpg",
    state: "Perak (Ipoh)",
    tag: `Gerbang Malam is a bustling night bazaar located in the heart of Ipoh. It is best known for affordable street snacks, accessories, and fashion items. While not as food-centric as other streets, visitors can still enjoy local delicacies and the vibrant night market vibe.`,
  },
  "Kampar Food Street": {
    img: "../Chong Zhi Cong/images/3.3.11kamparfoodstreet.jpg",
    state: "Perak",
    tag: `Kampar Food Street is famous for its traditional Cantonese and Hakka-style dishes. Visitors often come for Kampar curry chicken bread, claypot noodles, and local snacks. The area reflects the town's rich Chinese heritage and food culture.`,
  },
  "Arau Street Hawker Stall": {
    img: "../Chong Zhi Cong/images/3.3.12arau.jpg",
    state: "Perlis",
    tag: `Arau Street Hawker Stalls is a local favourite in Perlis, offering authentic northern Malaysian flavours. Popular items include laksa Perlis, grilled satay, and refreshing local desserts. The stalls provide a cosy, community-style food experience unique to the small state.`,
  },
};

//map of each street
const streetMapData = {
  "Jonker Street": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.8866491469544!2d102.24393922180249!3d2.196571258276009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f1db7fdc12a1%3A0xca21d5dee8e1fbd4!2z6bih5Zy66KGX5aSc5biC!5e0!3m2!1szh-CN!2smy!4v1756185016741!5m2!1szh-CN!2smy",
    title: "Jonker Street",
    info: "Located in Melaka, near Chinatown and historical sites.<br><strong>Opening Hours:</strong> Friday – Sunday, 7:00 PM – 1:00 AM",
  },
  "Jalan Alor": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.804927462597!2d101.70927619999999!3d3.1461209999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37f596755e59%3A0xa71b468e8e8210b!2z5Lqa572X576O6aOf6KGX!5e0!3m2!1szh-CN!2smy!4v1756185152941!5m2!1szh-CN!2smy",
    title: "Jalan Alor",
    info: "Famous KL night food street located in Bukit Bintang.<br><strong>Opening Hours:</strong> Daily, 5:00 PM – 12:00 AM",
  },
  "Gurney Drive": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.8832327722125!2d100.31200827181718!3d5.434700834864093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac30639f1f1b3%3A0x9409904a211ed837!2sPersiaran%20Gurney%2C%2010250%2C%20Pulau%20Pinang!5e0!3m2!1szh-CN!2smy!4v1756185373085!5m2!1szh-CN!2smy",
    title: "Gurney Drive",
    info: "Penang seaside hawker paradise, scenic stroll + food.<br><strong>Opening Hours:</strong> Daily, 5:00 PM - 11:00 PM",
  },
  "Chulia Street": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.992251767378!2d100.3362829!3d5.4181458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3904b1d7b37%3A0xd6f5c65a3d16a52!2sChulia%20Street%20Hawker%20Food!5e0!3m2!1szh-CN!2smy!4v1756185434221!5m2!1szh-CN!2smy",
    title: "Chulia Street",
    info: "Penang's vibrant night hawker stalls around Little India.<br><strong>Opening Hours:</strong> Daily, 6:00 PM - 12:00 AM",
  },
  "SS2 Night Market": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9108759960413!2d101.61982937180419!3d3.118275553348245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4953ff5a1811%3A0x3990022b43f10e0b!2sSS2%20Night%20Market!5e0!3m2!1szh-CN!2smy!4v1756185469997!5m2!1szh-CN!2smy",
    title: "SS2 Night Market",
    info: "A lively Monday night market in Petaling Jaya.<br><strong>Opening Hours:</strong> Mondays, 5:00 PM - 10:00 PM",
  },
  "Jalan Yang Kalsom": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0263358100547!2d101.08407830000002!3d4.5892967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caed35d40a863b%3A0x5d14ae5d72917100!2sMee%20Goreng%20Jalan%20Yang%20Kalsom!5e0!3m2!1szh-CN!2smy!4v1756185532339!5m2!1szh-CN!2smy",
    title: "Jalan Yang Kalsom",
    info: "Ipoh food haven featuring Hakka mee, chicken hor fun, caramel custard, nasi ganja, cendol.<br><strong>Opening Hours:</strong> Daily, 5:00 PM – 11:00 PM",
  },
  "Jalan Wong Ah Fook": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5181683428145!2d103.76392019999999!3d1.4627494000000072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da134a4669fb6b%3A0x402fd30a39be8323!2sJalan%20Wong%20Ah%20Fook%20Bridge!5e0!3m2!1szh-CN!2smy!4v1756185626510!5m2!1szh-CN!2smy",
    title: "Jalan Wong Ah Fook",
    info: "The bustling CBD street in Johor Bahru with many food options like curry and roasted duck.<br><strong>Opening Hours:</strong> Daily, 6:00 PM – 12:00 AM",
  },
  "New Lane Street Food": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0141863491513!2d100.32394617181703!3d5.414808835059885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3be119b4b0b%3A0xd6417012de525c17!2sNew%20Lane%20Street%20Foodstalls!5e0!3m2!1szh-CN!2smy!4v1756185664422!5m2!1szh-CN!2smy",
    title: "New Lane Street Food Stalls",
    info: "Popular Penang hawker street at Lorong Baru.<br><strong>Opening Hours:</strong> Daily, 5:00 PM – 11:00 PM",
  },
  "Petaling Street": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.811501207633!2d101.69507467180425!3d3.144400453188414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49d1adb75745%3A0xa9f6f7fb4291fafd!2z6Iyo5Y6C6KGX5biC5Zy6!5e0!3m2!1szh-CN!2smy!4v1756185701503!5m2!1szh-CN!2smy",
    title: "Petaling Street",
    info: "Kuala Lumpur’s Chinatown night market with street food, souvenirs.<br><strong>Opening Hours:</strong> Daily, 5:00 PM – 11:00 PM",
  },
  "Gerbang Malam": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.811501207633!2d101.69507467180425!3d3.144400453188414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49d1adb75745%3A0xa9f6f7fb4291fafd!2sGerbang%20Malam!5e0!3m2!1szh-CN!2smy!4v1756185701503!5m2!1szh-CN!2smy",
    title: "Gerbang Malam",
    info: "Ipoh's night market offering a variety of street food along Gerbang area.<br><strong>Opening Hours:</strong> Daily, 6:00 PM – 11:00 PM",
  },
  "Kampar Food Street": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31827.852571480933!2d101.11837420204112!3d4.320243466236237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cb1d59b55d4141%3A0x10d73d58747e62ba!2z6YeR5a6d5be05Yi55bCP6aOf5qGj77yI5Yez5a2Q54KS57KJ77yJ!5e0!3m2!1szh-CN!2smy!4v1756185785756!5m2!1szh-CN!2smy",
    title: "Kampar Food Street",
    info: "Perak's food street in Kampar, great for local hawker fare.<br><strong>Opening Hours:</strong> Daily, 5:00 PM – 11:00 PM",
  },
  "Arau Street Hawker Stall": {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.740454501433!2d100.2714735!3d6.4273818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ca3c7c33cc8df%3A0x7723fdf80ba0d275!2sArau%20Street%20Market!5e0!3m2!1szh-CN!2smy!4v1756185846727!5m2!1szh-CN!2smy",
    title: "Arau Street Hawker Stalls",
    info: "Perlis street hawker cluster offering local dishes in Arau.<br><strong>Opening Hours:</strong> Daily, 5:00 PM – 10:00 PM",
  },
};

//review video of each street
const streetVideoData = {
  "Jonker Street": "https://www.youtube.com/embed/wuoFSwEPiaI",
  "Jalan Alor": "https://www.youtube.com/embed/kZ2u_2pLLiw",
  "Gurney Drive": "https://www.youtube.com/embed/1hwzTygcFlU",
  "Chulia Street": "https://www.youtube.com/embed/Ez1qcbbwVjg",
  "SS2 Night Market": "https://www.youtube.com/embed/uHrlCZRMQL4",
  "Jalan Yang Kalsom": "https://www.youtube.com/embed/Ruf3P9Th_wQ",
  "Jalan Wong Ah Fook": "https://www.youtube.com/embed/TldLlw-v37A",
  "New Lane Street Food": "https://www.youtube.com/embed/RnSNKJ5qxQI",
  "Petaling Street": "https://www.youtube.com/embed/OFKWG3hb_FM",
  "Gerbang Malam": "https://www.youtube.com/embed/TE3eTFKqJII",
  "Kampar Food Street": "https://www.youtube.com/embed/RfIvO-DVjAQ",
  "Arau Street Hawker Stall": "https://www.youtube.com/embed/VsknE7A3K_4",
};

//trigger renew
function selectStreet(name) {
  // renew section2
  const street = streets[name];
  if (street) {
    document.getElementById("street-img").src = street.img;
    document.getElementById("street-img").alt = name;
    document.getElementById("street-name").innerText = name;
    document.getElementById("street-state").innerText = street.state;
    document.getElementById("street-tag").innerText = street.tag;
  }

  // renew section3
  const mapData = streetMapData[name];
  if (mapData) {
    const iframe = document.querySelector("#street-map iframe");
    const mapInfo = document.getElementById("map-info");

    iframe.src = mapData.map;
    mapInfo.querySelector("h3").innerText = mapData.title;
    mapInfo.querySelector("p").innerHTML = mapData.info;
  }

  // renew section4
  const videoContainer = document.querySelector(".video-container iframe");
  if (streetVideoData[name]) {
    videoContainer.src = streetVideoData[name];
  } else {
    console.warn("No video found for:", name);
    videoContainer.src = "";
  }
}

fetch("../HTML/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

const toggle = document.getElementById("navToggle");
const content = document.getElementById("navContent");

toggle.addEventListener("click", () => {
  content.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const historyBox = document.getElementById("search-history-box");

    // Load history from sessionStorage
    let searchHistory = JSON.parse(sessionStorage.getItem("searchHistory")) || [];

    // Render search history dropdown
    function renderHistory(filter = "") {
        // Filter history based on input text
        let filteredHistory = searchHistory.filter(item =>
            item.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredHistory.length === 0) {
            historyBox.style.display = "none";
            return;
        }

        historyBox.innerHTML = filteredHistory.map((item, index) => `
            <div class="history-item">
                <span class="history-text">${item}</span>
                <button class="delete-btn" data-index="${searchHistory.indexOf(item)}">✕</button>
            </div>
        `).join("");

        historyBox.style.display = "block";
    }

    // Save history to sessionStorage
    function saveHistory() {
        sessionStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }

    // Add new search term
    searchBar.addEventListener("change", function () {
        const value = searchBar.value.trim();
        if (value && !searchHistory.includes(value)) {
            searchHistory.unshift(value);
            if (searchHistory.length > 10) searchHistory.pop();
            saveHistory();
        }
    });

    // Show history when focusing search bar
    searchBar.addEventListener("focus", function () {
        renderHistory(searchBar.value);
    });

    // Show filtered history when typing
    searchBar.addEventListener("input", function () {
        renderHistory(searchBar.value);
    });

    // Click on history item to autofill search bar
    historyBox.addEventListener("click", function (e) {
        if (e.target.classList.contains("history-text")) {
            searchBar.value = e.target.textContent;
            historyBox.style.display = "none";
        }
    });

    // Delete a single history item
    historyBox.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.dataset.index;
            searchHistory.splice(index, 1);
            saveHistory();
            renderHistory(searchBar.value);
        }
    });

    // Hide history when clicking outside
    document.addEventListener("click", function (e) {
        if (!historyBox.contains(e.target) && e.target !== searchBar) {
            historyBox.style.display = "none";
        }
    });
});
