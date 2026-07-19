document.addEventListener('DOMContentLoaded', () => {
  const daySpans = document.querySelectorAll('.days-left');

  daySpans.forEach(span => {
    const eventDateStr = span.dataset.date;  // "2025-08-31"
    const eventDate = new Date(eventDateStr);
    const today = new Date();

    // Calculate difference in days
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      span.textContent = ` (${diffDays} day${diffDays > 1 ? 's' : ''} left)`;
    } else if (diffDays === 0) {
      span.textContent = ` (Today!)`;
    } else {
      span.textContent = ` (Event passed)`;
    }
  });
});

fetch('../HTML/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

// --- Cookie functions ---
// Cookie functions
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days*24*60*60*1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toUTCString();
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i=0; i<ca.length; i++){
        let c = ca[i].trim();
        if(c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
    }
    return "";
}

// DOM Elements
document.addEventListener("DOMContentLoaded", function() {
    const consentBanner = document.getElementById("cookie-consent");
    const newsletterContainer = document.getElementById("newsletter-container");
    const subscribeBtn = document.getElementById("subscribe-btn");
    const emailInput = document.getElementById("newsletter-email");

    // Always show both on page load / refresh
    consentBanner.style.display = "flex";
    newsletterContainer.style.display = "block";

    // Accept All Cookies (doesn't actually hide the banner permanently)
    document.getElementById("accept-cookies").addEventListener("click", function() {
        alert("Cookies accepted! (This will still show next time)");
        consentBanner.style.display = "none";
    });

    // Manage Cookies button
    document.getElementById("manage-cookies").addEventListener("click", function() {
        alert("Here you can manage cookies (but we'll still show this banner next time).");
    });

    // Subscribe to Newsletter
    subscribeBtn.addEventListener("click", function() {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            newsletterContainer.style.display = "none";
        } else {
            alert("Please enter a valid email.");
        }
    });
});