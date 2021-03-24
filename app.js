const menuClicks = document.getElementsByClassName('menuClick');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

//animate the burger menu
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

//set up on click events to close the menu after it has already been opened
for (var i = 0; i < menuClicks.length; i++) {
    menuClicks[i].onclick = () => {
        if (burger.classList.contains('toggle')) {
                animateMenu();
        }
    }
}

burger.onclick = () => {
        animateMenu();
}


