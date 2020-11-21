import './style.scss';
// import 'bootstrap-4-grid';

import 'bootstrap-4-grid'
import { localGallery } from './scripts/locals'
import { changeLink } from './scripts/links'
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';
import { mobilemenu } from './scripts/mobilemenu';
import { swiper1 } from './scripts/swipers';
import { privacy } from './scripts/privacy'
import { oferta } from './scripts/oferta'
import { contact } from './scripts/contact'
import { choiceScript } from './scripts/choices'

// import { galleryScript } from './scripts/gallery'
import { gallery2 , gallery2Carousel } from './scripts/gallery2'
const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav-2")
const oferta8 = document.querySelector('.oferta8')
const oferta6 = document.querySelector('.oferta6')
const preloader = document.querySelector(".preloader")
const over = document.querySelector(".over")
const swipercontainer = document.querySelector(".swiper-container")
const mouse = document.querySelector(".mouse")
const footerlogo = document.querySelector('.footer__logo')
// const privacy = document.querySelector(".privacy")
// const privacyBtn = document.querySelector(".privacy-btn")

const pageName = 'index'
window.addEventListener('load', function () {
  preloader.classList.add('go')
  over.classList.add('go')
      
  setTimeout(() => {
    swipercontainer.classList.remove('d-none')
    mouse.classList.add('d-sm-block')
    footerlogo.classList.remove("d-none")
    swiper1()
  }, 100);
      //  gallery2Carousel.create(0)
    jumps()
    scrolling('index')
    mobilemenu()
    gallery2()
    privacy()
    oferta()
    contact()
    changeLink()
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

