//display corresponding details
const cards = document.querySelectorAll('.top10-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        document.getElementById('detail-img').src = card.dataset.img;
        document.getElementById('detail-name').textContent = card.dataset.name;
        document.getElementById('detail-desc').textContent = card.dataset.desc;
        document.getElementById('detail-info').textContent = card.dataset.detail;
    });
});

//auto horizontal scrolling
const wrapper = document.querySelector('.top10-cards-wrapper');
setInterval(() => {
    wrapper.scrollBy({ left: 220, behavior: 'smooth' });
}, 3000);

//unlimited recycle scrolling
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".top10-cards-wrapper");

    // copy to back
    wrapper.innerHTML += wrapper.innerHTML;

    let scrollSpeed = 1.5;

    function autoScroll() {
        wrapper.scrollLeft += scrollSpeed;

        if (wrapper.scrollLeft >= wrapper.scrollWidth / 2 - scrollSpeed) {
            wrapper.scrollLeft -= wrapper.scrollWidth / 2;
        }
    }

    setInterval(autoScroll, 30);
});

//display corresponding details when click the scrolling card
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".top10-card");
    const details = {
        "Nasi Lemak": document.getElementById("detail-nasilemak"),
        "Roti Canai": document.getElementById("detail-roticanai"),
        "Hokkien Mee": document.getElementById("detail-hokkienmee"),
        "Rendang": document.getElementById("detail-rendang"),
        "Char Kuey Teow": document.getElementById("detail-charkueyteow"),
        "Satay": document.getElementById("detail-satay"),
        "Laksa": document.getElementById("detail-laksa"),
        "Bah Kut Teh": document.getElementById("detail-bahkutteh"),
        "Roast Chicken Rice": document.getElementById("detail-roastchickenrice"),
        "Nasi Kerabu": document.getElementById("detail-nasikerabu")
    };

    //Display Nasi Lemak details by default
    for (const key in details) {
        details[key].style.display = key === "Nasi Lemak" ? "flex" : "none";
    }

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = card.querySelector(".card-title").innerText.trim();

            //hide all details
            for (const key in details) {
                details[key].style.display = "none";
            }

            //display respective details
            if (details[title]) {
                details[title].style.display = "flex";
                details[title].scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

fetch('/Assignment/HTML/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

const toggle = document.getElementById('navToggle');
const content = document.getElementById('navContent');

toggle.addEventListener('click', () => {
  content.classList.toggle('show');
});