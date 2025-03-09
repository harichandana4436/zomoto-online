document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-images img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const alt = this.getAttribute('alt');
            openImageInModal(src, alt);
        });
    });

    function openImageInModal(src, alt) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${src}" alt="${alt}">
            </div>
        `;
        modal.innerHTML = modalContent;
        document.body.appendChild(modal);

        modal.querySelector('.close-button').addEventListener('click', function() {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
});
