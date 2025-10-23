document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchVendor');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const vendorCards = document.querySelectorAll('.vendor-card');

            vendorCards.forEach(card => {
                const vendorName = card.querySelector('.card-title') ? card.querySelector('.card-title').textContent.toLowerCase() : '';
                const vendorCategory = card.querySelector('.vendor-category') ? card.querySelector('.vendor-category').textContent.toLowerCase() : '';
                const vendorInfo = card.querySelector('.vendor-info-content') ? card.querySelector('.vendor-info-content').textContent.toLowerCase() : '';

                if (vendorName.includes(searchTerm) ||
                    vendorCategory.includes(searchTerm) ||
                    vendorInfo.includes(searchTerm)) {
                    card.closest('.col').style.display = '';
                } else {
                    card.closest('.col').style.display = 'none';
                }
            });
        });
    }
});
