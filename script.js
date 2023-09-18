let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            navLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
    
};

/* sticky navbar*/

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});
