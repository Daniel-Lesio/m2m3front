import './style.scss';

import {langs} from './newScripts/langs';
window.addEventListener('load',()=>{
  // preloader.classList.add('go')
  scrolling()
  langs()
})
import { scrolling } from './scripts/scrolling';
import { jumps } from './scripts/jumps';

jumps()

import Swiper , {Autoplay, Navigation}  from 'swiper';
  
import 'swiper/swiper-bundle.css';
import jump from 'jump.js';
Swiper.use([Navigation , Autoplay])

const swiper = new Swiper('.swiper-container',{
  autoplay : true,
  loop : true,
  direction : 'horizontal',
  speed: 400,
  navigation : {
    nextEl: '.next',
    prevEl: '.prev',
  }
  
})
const swiper2 = new Swiper('.swiper-container2',{
  autoplay : true,
  loop : true,
  direction : 'horizontal',
  speed: 400,
  navigation : {
    nextEl: '.next2',
    prevEl: '.prev2',
  }  
})


