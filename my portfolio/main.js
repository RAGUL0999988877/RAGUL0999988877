var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true

});

const about = document.getElementById('about');
const contact = document.getElementById('contact');
const home = document.getElementById('home');

about.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener('click', () => {
    home.scrollIntoView({ behavior: 'smooth' });
});