document.addEventListener('DOMContentLoaded', () => {
    const favBtn = document.querySelector('.fav-btn');

    if (favBtn) {
        favBtn.addEventListener('click', function () {
            this.classList.toggle('active');

            if (!this.classList.contains('active')) {
                const card = this.closest('.pet-card');
                card.style.opacity = '0.5';

                setTimeout(() => {
                    card.remove();
                }, 300);
            }
        });
    }
});