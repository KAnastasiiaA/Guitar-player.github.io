//______MENU______

const MENU_LINKS = document.querySelectorAll('.nav-menu__list-item');

MENU_LINKS.forEach(link => link.addEventListener('click', event =>{
    event.preventDefault();

    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}));


//______MENU_MOBILE______

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})