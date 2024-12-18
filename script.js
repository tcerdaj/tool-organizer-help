const searchInput = document.querySelector('#search');
const contentSections = document.querySelectorAll('section');

if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase();

        contentSections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(query)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}