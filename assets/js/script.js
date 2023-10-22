$(document).ready(function() {
    $('#home').load('pages/home.html');
    $('#about').load('pages/about.html');
    $('#projects').load('pages/projects.html');
    $('#resume').load('pages/resume.html');
    $('#skills').load('pages/skills.html');
    


    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  // 1000ms = 1 second for the scroll
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

