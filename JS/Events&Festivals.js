document.addEventListener('DOMContentLoaded', () => {
    // Correctly get the single events container by its ID
    const eventsContainer = document.getElementById("upcoming-events-container");

    // Check if the container was found before proceeding
    if (eventsContainer) {
        const eventCards = Array.from(eventsContainer.children);
        
        // Sort the event cards based on their data-date attribute
        eventCards.sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            
            return dateA - dateB;
        });

        // Clear the container's HTML
        eventsContainer.innerHTML = '';

        // Append the sorted cards back to the container
        eventCards.forEach(card => eventsContainer.appendChild(card));
        eventCards.forEach((card, index) => {
            eventsContainer.appendChild(card);
            
            const h1Element = card.querySelector('h1');
            if (h1Element) {
                // Use padStart to add a leading zero if the number is less than 10
                const newNumber = (index + 1).toString().padStart(2, '0');
                h1Element.textContent = newNumber;
            }
        });
    } else {
        // Log an error if the container is not found, to help with debugging
        console.error("The events container element with ID 'upcoming-events-container' was not found.");
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const daySpans = document.querySelectorAll('.days-left');

  daySpans.forEach(span => {
    const startDateStr = span.dataset.start;
    const endDateStr = span.dataset.end;
    const singleDateStr = span.dataset.date;

    const today = new Date();
    today.setHours(0,0,0,0);

    if (singleDateStr) {
      // Single-day event
      const eventDate = new Date(singleDateStr);
      eventDate.setHours(0,0,0,0);
      const diffDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));

      if (diffDays > 0) span.textContent = ` (${diffDays} day${diffDays>1?'s':''} left)`;
      else if (diffDays === 0) span.textContent = ` (Today!)`;
      else span.textContent = ` (Event ended)`;

    } else if (startDateStr && endDateStr) {
      // Multi-day event
      const startDate = new Date(startDateStr);
      const endDate = new Date(endDateStr);
      startDate.setHours(0,0,0,0);
      endDate.setHours(0,0,0,0);

      if (today < startDate) {
        const diffDays = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
        span.textContent = ` (Starts in ${diffDays} day${diffDays>1?'s':''})`;
      } else if (today >= startDate && today <= endDate) {
        const diffDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)) + 1; // include today
        span.textContent = ` (Ongoing, ${diffDays} day${diffDays>1?'s':''} left)`;
      } else {
        span.textContent = ` (Event ended)`;
      }
    }

    // Toggle bookmark on click
    document.addEventListener('click', function (e) {
      if (e.target.closest('.bookmark-btn')) {
          const btn = e.target.closest('.bookmark-btn');
          const icon = btn.querySelector('i');
          
          // Get data attributes
          const name = btn.dataset.name;
          const type = btn.dataset.type;
          const description = btn.dataset.description || '';
          const image = btn.dataset.image || '';
          const state = "Events"; // Since these are events, not state-specific

          // Get bookmarks from localStorage
          let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

          // Check if bookmark exists
          const index = bookmarks.findIndex(
              b => b.type === type && b.name === name && b.state === state
          );

          if (index === -1) {
              // Add to bookmarks
              bookmarks.push({ type, state, name, description, image });
              localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

              // Change icon instantly
              icon.classList.remove('bi-bookmark');
              icon.classList.add('bi-bookmark-fill');
              btn.classList.add('active');
          } else {
              // Remove from bookmarks
              bookmarks.splice(index, 1);
              localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

              // Reset icon instantly
              icon.classList.remove('bi-bookmark-fill');
              icon.classList.add('bi-bookmark');
              btn.classList.remove('active');
          }
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

      document.querySelectorAll('.bookmark-btn').forEach(btn => {
          const icon = btn.querySelector('i');
          const name = btn.dataset.name;
          const type = btn.dataset.type;
          const state = "Events"; // Since these are events, not state-specific

          const isBookmarked = bookmarks.some(
              b => b.type === type && b.name === name && b.state === state
          );

          if (isBookmarked) {
              icon.classList.remove('bi-bookmark');
              icon.classList.add('bi-bookmark-fill');
              btn.classList.add('active');
          } else {
              icon.classList.remove('bi-bookmark-fill');
              icon.classList.add('bi-bookmark');
              btn.classList.remove('active');
          }
      });
    });
    });
});

fetch('../HTML/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });