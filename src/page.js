import './page.scss';
import 'bootstrap-4-grid'

// import { changeLink } from './scripts/links'
import { choiceScript } from './scripts/choices'
import { privacy } from './scripts/privacy'
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';
import { mobilemenu } from './scripts/mobilemenu';
// import { galleryScript } from './scripts/gallery'
import { gallery2 , gallery2Carousel } from './scripts/gallery2'
import { localGallery , localPrivacy } from './scripts/locals'
// import { picturesFoo } from './scripts/pictures'
const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav")
const preloader = document.querySelector(".preloader")
const over = document.querySelector(".over")
const footerlogo = document.querySelector('.footer__logo')


window.addEventListener('load', function () {
    preloader.classList.add('go')
    over.classList.add('go')
    footerlogo.classList.remove("d-none")
        // jumps()
        scrolling()
        mobilemenu()
        // gallery2()
        privacy()        
        localPrivacy()
        choiceScript()
        // picturesFoo()
        menuFixedIcon.addEventListener("click",()=>{
        menuFixedNav.classList.toggle("show-menu-fixed-nav")
    }) 

 })

const menuFixed = document.querySelector(".menu-fixed")
menuFixed.classList.add("menu-fixed--scrolled");
