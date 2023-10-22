$(document).ready(function() {
    // Load the about section by default when the page loads
    $('#main-content').load('pages/about.html');

    // Event listener for navigation links
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        
        // Get the data attribute of the clicked link to determine which page to load
        let page = $(this).data('page');
        $('#main-content').load(`pages/${page}.html`);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let skillBars = document.querySelectorAll("[data-inviewport='bar-fill']");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let width = entry.target.style.width;
                entry.target.style.width = "0";
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 50);
            }
        });
    }, { threshold: 0.1 });

    skillBars.forEach(skillBar => observer.observe(skillBar));
});
