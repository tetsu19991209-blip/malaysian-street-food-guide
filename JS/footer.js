// footer.js

// Mock REST API to get social links
function fetchSocialLinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success
            resolve({
                facebook: "https://www.facebook.com/QualifoodMY",
                instagram: "https://www.instagram.com/QualifoodMY",
                twitter: "https://twitter.com/QualifoodMY"
            });

            // Simulate failure:
            // reject("Failed to fetch social links");
        }, 500);
    });
}

// Function to load footer dynamically
function loadFooter() {
    const placeholder = document.getElementById("footer-placeholder");
    if (!placeholder) return; // Exit if placeholder not found

    // Insert the footer HTML
    placeholder.innerHTML = `
        <footer class="bg-dark text-light py-4 mt-5">
            <div class="container">
                <div class="row align-items-center flex-wrap">
                    <div class="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start" id="footerAbout">
                        <h3 class="mb-1">Qualifood</h3>
                        <p class="mb-0">
                            Dive into Malaysia’s vibrant street food scene with Qualifood.
                            Uncover hidden gems, indulge in authentic flavors, and find your
                            next delicious adventure.
                        </p>
                    </div>
                    <div class="col-12 col-md-6 text-center text-md-end d-flex justify-content-center justify-content-md-end flex-wrap"
                        id="footerSocial">
                        <a id="facebook-link" href="javascript:void(0);" class="text-light me-3 mb-2 social-icon">
                            <i class="bi bi-facebook fs-4"></i>
                        </a>
                        <a id="instagram-link" href="javascript:void(0);" class="text-light me-3 mb-2 social-icon">
                            <i class="bi bi-instagram fs-4"></i>
                        </a>
                        <a id="twitter-link" href="javascript:void(0);" class="text-light mb-2 social-icon">
                            <i class="bi bi-twitter fs-4"></i>
                        </a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 text-center">&copy; 2025 Qualifood. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    `;

    // Populate social links dynamically
    fetchSocialLinks()
        .then(data => {
            placeholder.querySelector("#facebook-link").href = data.facebook;
            placeholder.querySelector("#instagram-link").href = data.instagram;
            placeholder.querySelector("#twitter-link").href = data.twitter;
        })
        .catch(error => {
            console.error(error);
            placeholder.querySelectorAll(".social-icon").forEach(icon => icon.classList.add("disabled"));
            alert("Cannot fetch social links. Please try again later.");
        });
}

// Run on DOMContentLoaded
document.addEventListener("DOMContentLoaded", loadFooter);
