/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navTaggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW ======*/
/* Validate if constant exists */
if (navTaggle) {
    navTaggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ====== MENU HIDDEN ====== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper('.favorite_swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    gabCursor: true,

    breakpoints: {
        786:{
            slidesPerView: 3,    
        }
    }
});

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
