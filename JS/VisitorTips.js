// State data with must-try foods and tips
const stateData = {
  "Johor": {
    tips: ["Try Laksa Johor—the spaghetti‑style laksa", "Visit JB Sentral food courts for cleanliness"],
    foods: [
      {name:"Laksa Johor", 
        description:"Spaghetti‑style laksa with fish gravy", 
        image:"/Assignment/Food/Laksa Johor.jpeg"
      },
      {name:"Mee Bandung", 
        description:"Rich prawn‑and‑egg noodle dish", 
        image:"/Assignment/Food/Mee Bandung.jpg"
      },
      {name:"Otak‑otak", 
        description:"Grilled fish cake in banana leaf", 
        image:"/Assignment/Food/Otak-otak.jpg"
      }
    ]
  },
  "Kedah": {
    tips: ["Try Laksa Kedah and Nasi Ulam", "Explore local night markets in Alor Setar"],
    foods: [
      {name:"Laksa Kedah", 
        description:"Tamarind‑spiced laksa with fish and condiments", 
        image:"/Assignment/Food/Laksa Kedah.jpg"
      },
      {name:"Nasi Ulam",
        description:"A traditional Indonesian and Malaysian dish of steamed rice (nasi) served with various herbs and vegetables (Ulam (salad))",
        image:"/Assignment/Food/Nasi Ulam.jpeg"  
      }
    ]
  },
  "Kelantan": {
    tips: ["Don’t miss Nasi Kerabu and Ayam Percik", "Visit vibrant Pasar Siti Khadijah markets"],
    foods: [
      {name:"Nasi Kerabu", 
        description:"Blue‑colored rice salad with herbs & fish", 
        image:"/Assignment/Food/Nasi Kerabu.png"
      },
      {name:"Ayam Percik", 
        description:"Grilled chicken with spicy, creamy sauce", 
        image:"/Assignment/Food/Ayam Percik.jpeg"
      }
    ]
  },
  "Melaka": {
    tips: ["Head to Jonker Street for Chicken Rice Balls and Cendol", "Try Satay Celup and Nyonya cuisine"],
    foods: [
      {name:"Chicken Rice Balls", 
        description:"Classic chicken rice shaped into balls", 
        image:"/Assignment/Food/Chicken Rice Balls.png"
      },
      {name:"Cendol", 
        description:"Shaved ice dessert with coconut & gula Melaka", 
        image:"/Assignment/Food/Chendol Melaka.jpg"
      },
      {name:"Nyonya Laksa", 
        description:"Coconut‑based, aromatic laksa", 
        image:"/Assignment/Food/Laksa Nyonya.png"
      }
    ]
  },
  "Negeri Sembilan": {
    tips: ["Enjoy Minangkabau‑flavored rendang and lemang"],
    foods: [
      {name:"Rendang Minang", 
        description:"Rich spiced coconut beef stew", 
        image:"/Assignment/Food/Rendang Minang.jpeg"
      },
      {name:"Lemang", 
        description:"Glutinous rice cooked in bamboo", 
        image:"/Assignment/Food/Lemang.jpg"
      }
    ]
  },
  "Pahang": {
    tips: ["Try Nasi Dagang and Ikan Bakar along Kuantan coast"],
    foods: [
      {name:"Nasi Dagang", 
        description:"Coconut rice with fish curry", 
        image:"/Assignment/Food/Nasi Daging.jpg"
      },
      {name:"Mee Calong", 
        description:"A noodle dish eaten with fish soup, fish balls, and tofu puffs", 
        image:"/Assignment/Food/Mee Calong.jpg"
      }
    ]
  },
  "Penang": {
    tips: ["Gurney Drive & George Town are street‑food hubs", "Try iconic dishes like Char Kuey Teow & Asam Laksa", "Try Asam Laksa with spring rolls for unique delicacy"],
    foods: [
      {name:"Char Kuey Teow", 
        description:"Smoky fried rice noodles with prawns", 
        image:"/Assignment/Food/Char Kuey Teow.jpg"
      },
      {name:"Penang Laksa", 
        description:"Tangy, spicy fish‑based noodle soup", 
        image:"/Assignment/Food/Laksa Penang.jpg"
      },
      {name:"Hokkien Mee", 
        description:"Prawn noodle soup with pork & egg", 
        image:"/Assignment/Food/Hokkien Mee.jpg"
      }
    ]
  },
  "Perak": {
    tips: ["Eat Bean Sprout Chicken in Ipoh", "Grand old kopitiams serve kaya toast which are iconic"],
    foods: [
      {name:"Bean Sprout Chicken (Nga Choy Gai)", 
        description:"Silky chicken with crunchy sprouts", 
        image:"/Assignment/Food/Bean Sprout Chicken.jpg"
      },
      {name:"Chee Cheong Fun", 
        description:"Thin, silky-smooth rice noodles made with the city's unique hard water, often served with savory toppings like minced meat and mushroom gravy or a rich, creamy curry sauce with pork rind and long beans, complemented by fried shallots, sesame seeds, and pickled green chilies", 
        image:"/Assignment/Food/Chee Cheong Fun.jpg"
      }
    ]
  },
  "Perlis": {
    tips: ["Try Thai‑Malay fusion—especially laksa Perlis"],
    foods: [
      {name:"Laksa Kuala Perlis", 
        description:"Noodle soup combining Thai & Malay spices", 
        image:"/Assignment/Food/Laksa Perlis.jpg"}
    ]
  },
  "Sabah": {
    tips: ["Try signature dishes like Ngiu Chap (beef noodle soup), Tuaran Mee, and Hinava (lime-cured raw fish)", "Visit Kota Kinabalu night market for hinava"],
    foods: [
      {name:"Hinava", 
        description:"Tangy raw fish salad from Sabah", 
        image:"/Assignment/Food/Hinava.jpg"
      },
      {name:"Tuaran Mee", 
        description:"Intensely eggy, handmade noodles that are deep-fried until slightly crispy, then softened by being boiled in water or stock before being stir-fried with ingredients like char siew (barbecued pork), Hakka egg rolls, and vegetables such as choy sum", 
        image:"/Assignment/Food/Tuaran Mee.jpg"
      }
    ]
  },
  "Sarawak": {
    tips: ["Try Sarawak Laksa & Kolo Mee in Kuching"],
    foods: [
      {name:"Sarawak Laksa", 
        description:"Herbal prawn laksa from Borneo", 
        image:"/Assignment/Food/Sarawak Laksa.jpg"
      },
      {name:"Kolo Mee", 
        description:"Dry noodles tossed with minced meat", 
        image:"/Assignment/Food/Kolo Mee.jpg"
      },
      {name:"Manok Pansuh", 
        description:"Chicken cooked in bamboo", 
        image:"/Assignment/Food/Manok Pansuh.jpg"
      }
    ]
  },
  "Selangor": {
    tips: ["Find street foods from street stalls to upscale kopitiams"],
    foods: [
      {name:"Satay", 
        description:"Grilled skewers with peanut sauce", 
        image:"/Assignment/Food/Satay.png"
      }
    ]
  },
  "Terengganu": {
    tips: ["Taste Sata, Keropok Lekor at East Coast stalls"],
    foods: [
      {name:"Sata", 
        description:"Grilled fish dumpling in banana leaf", 
        image:"/Assignment/Food/Sata.jpg"
      },
      {name:"Keropok Lekor", 
        description:"A popular, traditional Malaysian snack from Terengganu made from minced fish (often mackerel), sago flour, salt, and sugar, then rolled into long, sausage-like shapes", 
        image:"/Assignment/Food/Keropok Lekor.png"
      }
    ]
  },
  "Kuala Lumpur": {
    tips: ["Use MRT/LRT for easy transport", "Jalan Alor and Taman Connaught are street‑food hubs"],
    foods: [
      {name:"Nasi Lemak", 
        description:"Fragrant coconut rice with sambal & anchovies", 
        image:"/Assignment/Food/Nasi Lemak.jpg"
      },
      {name:"Roti Canai", 
        description:"Flaky flatbread with dhal or curry", 
        image:"/Assignment/Food/Roti Canai.png"
      },
      {name:"Satay", 
        description:"Grilled skewers with peanut sauce", 
        image:"/Assignment/Food/Satay.png"
      }
    ]
  }
};

// Create a list of all available states
const allStates = Object.keys(stateData);

function generateStateAccordion() {
      const $acc = $('#stateAccordion').empty();
      allStates.forEach((state, idx) => {
        const id = state.replace(/\s+/g, '');
        $acc.append(`<div class="accordion-item"><h2 class="accordion-header" id="heading${id}"><button class="accordion-button ${idx ? 'collapsed':''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}">${state}</button></h2><div id="collapse${id}" class="accordion-collapse collapse ${idx===0?'show':''}" data-bs-parent="#stateAccordion"><div class="accordion-body"><ul>${stateData[state].tips.map(t=>`<li>${t}</li>`).join('')}</ul></div></div></div>`);
      });
    }

    function showInitialView() {
      $('#initialView').show();
      $('#state-content').hide();
      $('#statesSection').show();
      $('#searchInput').val('');
      $('#suggestionsList').hide();
      $('.flag-item').removeClass('active');
    }

    function showStateContent(location) {
      const info = stateData[location];
      if (!info) return;

      $('#initialView').hide();
      $('#state-content').show();
      $('.flag-item').removeClass('active');
      $(`.flag-item[data-location="${location}"]`).addClass('active');

      $('#selectedStateHeader').html(`
        <h2>${location} Street Food Guide</h2>
        <p class="mb-0">Discover the unique flavors of ${location}</p>
      `);

      let html = '';

      if (info.tips?.length) {
        html += `
          <h3><i class="bi bi-lightbulb me-2"></i>Essential Tips</h3>
          <div class="row mb-4">
            ${info.tips.map(t => `
              <div class="col-md-6 mb-3">
                <div class="card card-tip h-100">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                      <strong>Travel Tip</strong>
                      <button class="btn btn-sm btn-outline-dark bookmark-btn"
                          data-type="tip"
                          data-state="${location}"
                          data-name="Travel Tip"
                          data-description="${t.replace(/"/g, '&quot;')}">
                        <i class="bi bi-bookmark"></i>
                      </button>
                    </div>
                    <p>${t}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      if (info.foods?.length) {
        html += `
          <h3><i class="bi bi-egg-fried me-2"></i>Must‑Try Street Foods</h3>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            ${info.foods.map(f => `
              <div class="col">
                <div class="card food-card h-100">
                  <img src="${f.image}" class="card-img-top" alt="${f.name}">
                  <div class="card-body">
                    <h5 class="d-flex justify-content-between align-items-center">
                      ${f.name}
                      <button class="btn btn-sm btn-outline-dark bookmark-btn"
                              data-type="food"
                              data-state="${location}"
                              data-name="${f.name}"
                              data-description="${f.description.replace(/"/g, '&quot;')}">
                        <i class="bi bi-bookmark"></i>
                      </button>
                    </h5>
                    <p>${f.description}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      $('#stateSpecificContent').html(html);
    }

    $('#searchInput').on('input', function(){
      const v = $(this).val().toLowerCase();
      const list = $('#suggestionsList').empty();
      if (!v) return list.hide();
      const matches = allStates.filter(s=>s.toLowerCase().includes(v));
      if (!matches.length) return list.hide();
      matches.forEach(s=> list.append(`<li class="list-group-item suggestion-item">${s}</li>`));
      list.show();
    });

    $(document).on('click', '.suggestion-item', function(){
      const s = $(this).text();
      $('#searchInput').val(s);
      $('#suggestionsList').hide();
      showStateContent(s);
    });

    $(document).click(e => {
      if (!$(e.target).closest('#searchInput, #suggestionsList').length) $('#suggestionsList').hide();
    });

    $('#navStates').click(e=>{ e.preventDefault(); showInitialView(); $('html, body').animate({ scrollTop: $('#state-guide').offset().top - 70}, 400); });
    $('#navMustTry').click(e=>{ e.preventDefault(); showInitialView(); $('html, body').animate({ scrollTop: $('#must-try').offset().top - 70 }, 400); });
    $('#navApps').click(e=>{ e.preventDefault(); showInitialView(); $('html, body').animate({ scrollTop: $('#apps').offset().top - 70 }, 400); });
    $('#navPhrase').click(e=>{ e.preventDefault(); showInitialView(); $('html, body').animate({ scrollTop: $('#local').offset().top - 70 }, 400); });
    $('#navFaq').click(e=>{ e.preventDefault(); showInitialView(); $('html, body').animate({ scrollTop: $('#faq').offset().top - 70 }, 400); });

    $('.flag-item').click(function(){
      const loc = $(this).data('location');
      $('#searchInput').val(loc);
      showStateContent(loc);
    });

    $(document).ready(function(){
      generateStateAccordion();
      showInitialView();
    });

  // Scroll to the state content section
    $('html, body').animate({
      scrollTop: $("#state-content").offset().top - 70
    }, 600);
  

  // Handle flag click
  $('.flag-item').click(function () {
    const location = $(this).data('location');
    $('#searchInput').val(location);
    showTipsFor(location);
    $('#suggestionsList').hide();
  });

  // Handle search input + live suggestions
  $('#searchInput').on('input', function () {
    const value = $(this).val().trim().toLowerCase();
    const suggestionList = $('#suggestionsList');
    suggestionList.empty();

    if (value.length < 1) {
      suggestionList.hide();
      return;
    }

    const matches = allStates.filter(state =>
      state.toLowerCase().includes(value)
    );

    if (matches.length === 0) {
      suggestionList.hide();
      return;
    }

    matches.forEach(state => {
      suggestionList.append(`<li class="list-group-item list-group-item-action suggestion-item">${state}</li>`);
    });

    suggestionList.show();
  });

  // Handle suggestion click
  $(document).on('click', '.suggestion-item', function () {
    const selectedState = $(this).text();
    $('#searchInput').val(selectedState);
    $('#suggestionsList').hide();
    showTipsFor(selectedState);
  });

  // Hide suggestions when clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest('#searchInput').length && !$(e.target).closest('#suggestionsList').length) {
      $('#suggestionsList').hide();
    }
  });

  // Initialize the page
  $(document).ready(function() {
    generateStateAccordion();
  });

// =============================
// Visitor Tips Bookmark System
// =============================

// =============================
// Bookmark System with Active Color & Popup
// =============================

// Toggle bookmark on click with active style and popup
$(document).on('click', '.bookmark-btn', function () {
    const btn = $(this);
    const name = btn.data('name');
    const type = btn.data('type');
    const state = btn.data('state') || null;
    const description = btn.data('description') || '';
    const image = btn.closest('.card').find('img').attr('src') || '';

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const index = bookmarks.findIndex(b => b.type === type && b.name === name && b.state === state);

    if (index === -1) {
        bookmarks.push({ type, state, name, description, image });
        btn.addClass('active-bookmark');
        showBookmarkMessage(`${name} added to bookmarks!`, 'add');
    } else {
        bookmarks.splice(index, 1);
        btn.removeClass('active-bookmark');
        showBookmarkMessage(`${name} removed from bookmarks.`, 'remove');
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
});

// Show popup message
function showBookmarkMessage(msg, type = 'add') {
    let popup = $('#bookmarkPopup');
    if (!popup.length) {
        $('body').append('<div id="bookmarkPopup" style="position: fixed; top: 20px; right: 20px; padding: 12px 18px; border-radius: 5px; z-index: 9999; display: none; font-weight: 500;"></div>');
        popup = $('#bookmarkPopup');
    }

    // Style popup
    popup.css({
        'background-color': type === 'add' ? '#28a745' : '#dc3545',
        'color': '#fff'
    });

    popup.stop(true, true).text(msg).fadeIn(300).delay(1200).fadeOut(500);
}

// On page load, mark already bookmarked items as active
$(document).ready(function() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    $('.bookmark-btn').each(function() {
        const btn = $(this);
        const name = btn.data('name');
        const type = btn.data('type');
        const state = btn.data('state') || null;

        if (bookmarks.find(b => b.type === type && b.name === name && b.state === state)) {
            btn.addClass('active-bookmark'); // Mark as active
        }
    });
});

fetch('/Assignment/HTML/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });