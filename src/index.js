import './style.scss';
import 'bootstrap-4-grid'
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';
import { mobilemenu } from './scripts/mobilemenu';
import { swiper1 } from './scripts/swipers';
import { privacy } from './scripts/privacy'
import { oferta } from './scripts/oferta'
import { contact } from './scripts/contact'
import { lazy } from './scripts/lazy'
import { choiceScript } from './scripts/choices'
const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav-2")
const preloader = document.querySelector(".preloader")
const over = document.querySelector(".over")
const swipercontainer = document.querySelector(".swiper-container")
const mouse = document.querySelector(".mouse")
const footerlogo = document.querySelector('.footer__logo')

swiper1()
window.addEventListener('load', function () {
  preloader.classList.add('go')
  over.classList.add('go')
      
  setTimeout(() => {
    // swipercontainer.classList.remove('d-none')
    mouse.classList.add('d-sm-block')
    footerlogo.classList.remove("d-none")
  }, 100);
    jumps()
    lazy();
    scrolling('index')
    mobilemenu()
    privacy()
    oferta()
    contact()
    choiceScript()

    menuFixedIcon.addEventListener("click",()=>{
    
    menuFixedNav.classList.toggle("show-menu-fixed-nav")

   })
 })
//  const  choices = document.querySelectorAll('.choices h2')


 const galleryChoices = document.querySelectorAll('.gallery-choice')
 const galleryImages = document.querySelectorAll('.grid__box img')
 
 galleryImages.forEach(gi=>{
   if(gi.dataset.choice === '2' || gi.dataset.choice === '1'){
     gi.classList.add('hide-img') 
   }
 
 })
 
  for (let i = 0; i < galleryChoices.length; i++) {
      galleryChoices[i].addEventListener('click',()=>{
          galleryImages.forEach(gi=>{
            gi.classList.add('hide-img')
            if(gi.dataset.choice == i ){
              gi.classList.remove('hide-img')
            }       
          })
      })
  }

