import './base.scss';
import 'bootstrap-4-grid'
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';
import { mobilemenu } from './scripts/mobilemenu';
import { privacy } from './scripts/privacy'
import { contact } from './scripts/contact'
import { choiceScript } from './scripts/choices'
const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav-2")
const preloader = document.querySelector(".preloader")
const over = document.querySelector(".over")
const footerlogo = document.querySelector('.footer__logo')

window.addEventListener('load', function () {
  preloader.classList.add('go')
  over.classList.add('go')
      
  setTimeout(() => {    
    footerlogo.classList.remove("d-none")
  }, 100);
    jumps()
    scrolling('base')
    mobilemenu()
    privacy()
    contact()
    choiceScript()

    menuFixedIcon.addEventListener("click",()=>{
    
    menuFixedNav.classList.toggle("show-menu-fixed-nav")

   })
 })


