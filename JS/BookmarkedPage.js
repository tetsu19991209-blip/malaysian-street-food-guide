document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('bookmarkList');
    const emptyMsg = document.getElementById('emptyBookmarkMsg');
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    function showToast(title, message, color = 'danger') {
    const toastWrapper = document.createElement('div');
    toastWrapper.style.position = 'fixed';
    toastWrapper.style.bottom = '1rem';
    toastWrapper.style.left = '50%';      // center horizontally
    toastWrapper.style.transform = 'translateX(-50%)';
    toastWrapper.style.zIndex = 1055;
    toastWrapper.style.width = '90%';     // responsive width
    toastWrapper.style.maxWidth = '400px'; // optional max width
    toastWrapper.innerHTML = `
        <div class="toast show bg-${color} text-white shadow" role="alert">
            <div class="toast-header bg-${color} text-white">
                <strong class="me-auto">${title}</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">${message}</div>
        </div>`;
    document.body.appendChild(toastWrapper);
    setTimeout(() => toastWrapper.remove(), 2000);
}

function renderBookmarks() {
    container.innerHTML = '';
    if (bookmarks.length === 0) {
        emptyMsg.style.display = 'block';
        container.style.display = 'none';
        return;
    }
    emptyMsg.style.display = 'none';
    container.style.display = 'flex';   // keep flex
    container.style.flexWrap = 'wrap';  // ensure wrapping
    // DO NOT set flexDirection: column

    bookmarks.forEach(item => {
        const div = document.createElement('div');
        div.className = 'col-12 mb-1'; // CSS handles column width
        div.innerHTML = `
        <div class="bookmark-card">
            ${item.image ? `<img src="${item.image}" class="bookmark-card-img" alt="${item.name}">` : ''}
            <div class="bookmark-card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 class="bookmark-card-title">${item.name}</h5>
                        ${item.state ? `<span class="badge bg-secondary mb-1">${item.state}</span>` : ''}
                        <p class="bookmark-card-text mb-0">${item.description || ''}</p>
                    </div>
                    <button class="btn bookmark-btn bookmarked"
                        style="background:none; border:none; padding:0;"
                        data-name="${item.name}" 
                        data-type="${item.type}" 
                        data-state="${item.state || ''}">
                        <i class="bi bi-bookmark-fill" style="color:#ffc107;"></i>
                    </button>
                </div>
            </div>
        </div>`;
        container.appendChild(div);
    });
}


    container.addEventListener('click', function (e) {
        const btn = e.target.closest('.bookmark-btn');
        if (!btn) return;

        const name = btn.dataset.name;
        const type = btn.dataset.type;
        const state = btn.dataset.state || '';

        bookmarks = bookmarks.filter(b => !(b.name === name && b.type === type && b.state === state));
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        showToast('Bookmark Removed', `"${name}" has been removed from your bookmarks.`, 'danger');

        renderBookmarks();
        window.dispatchEvent(new Event('bookmarksUpdated'));
    });

    renderBookmarks();

    window.addEventListener('bookmarksUpdated', () => {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        renderBookmarks();
    });
});

fetch('/Assignment/HTML/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
