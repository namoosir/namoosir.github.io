/* const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const menuClicks = document.querySelectorAll('.menuClick');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.35s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
        //don't allow scroll
        document.body.classList.toggle('noscroll');
    });
}
*/

const menuClicks = document.getElementsByClassName('menuClick');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function animateMenu() {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.35s ease forwards ${index / 7 + 0.2}s`;
        }
    });

    //burger animation
    burger.classList.toggle('toggle');
}


burger.onclick = () => {
    animateMenu();
}