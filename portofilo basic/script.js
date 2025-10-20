let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// FIX 7: Corrected typo: 'new typed' to 'new Typed'
// The selector '.multiple-text' is correct after the HTML fix.
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Blockchain Developer', 'web Designer', 'Youtuber'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});
