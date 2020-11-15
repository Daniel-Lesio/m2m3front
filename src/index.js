 import './style.scss';
// import 'bootstrap-4-grid';

import 'bootstrap-4-grid'
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';
import { mobilemenu } from './scripts/mobilemenu';
import { swiper1 } from './scripts/swipers';
// import { galleryScript } from './scripts/gallery'
import { gallery2 , gallery2Carousel } from './scripts/gallery2'
const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav")
const oferta8 = document.querySelector('.oferta8')
const oferta6 = document.querySelector('.oferta6')
const preloader = document.querySelector(".preloader")
const over = document.querySelector(".over")
const swipercontainer = document.querySelector(".swiper-container")
const mouse = document.querySelector(".mouse")
const footerlogo = document.querySelector('.footer__logo')

window.addEventListener('load', function () {

      preloader.classList.add('go')
      over.classList.add('go')

      setTimeout(() => {
        swipercontainer.classList.remove('d-none')
        mouse.classList.add('d-sm-block')
        footerlogo.classList.remove("d-none")
        swiper1()
      }, 1100);
       gallery2Carousel.create(0)
      jumps()
      scrolling()
      mobilemenu()
      gallery2()
    menuFixedIcon.addEventListener("click",()=>{
    
    menuFixedNav.classList.toggle("show-menu-fixed-nav")
   })
  
  
   oferta6.addEventListener('click',()=>{
     oferta8.classList.remove("btn--active")
     oferta6.classList.add("btn--active")
     document.querySelector('.oferta-1 .cena').innerHTML ='350 zł'
     document.querySelector('.oferta-2 .cena').innerHTML ='450 zł'
     document.querySelector('.oferta-3 .cena').innerHTML ='550 zł'
     document.querySelector('.oferta-4 .cena').innerHTML ='250 zł'
   })
   oferta8.addEventListener('click',()=>{
     oferta6.classList.remove("btn--active")
     oferta8.classList.add("btn--active")
     document.querySelector('.oferta-1 .cena').innerHTML ='450 zł'
     document.querySelector('.oferta-2 .cena').innerHTML ='550 zł'
     document.querySelector('.oferta-3 .cena').innerHTML ='650 zł'
     document.querySelector('.oferta-4 .cena').innerHTML ='350 zł'
   })
  
   const choices = document.querySelectorAll(".choices h2")
   choices.forEach(choice=>{
     choice.addEventListener('click',()=>{       
       choices.forEach(ch=>ch.classList.remove('active')) 
       choice.classList.add('active')    
     })
   })  
 })



const galleryChoices = document.querySelectorAll('.gallery-choice')
const galleryImages = document.querySelectorAll('.grid__box img')

// galleryChoices.forEach(choice=>{
//   console.log(choice.data)
// })
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



 const checkbox = document.querySelector(".ct")
 const checkboxIcon  = document.querySelector('.ct-x')

 checkbox.addEventListener('click',()=>{
   checkboxIcon.classList.toggle('hide-checkbox')
 })
