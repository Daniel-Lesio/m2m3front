import Swiper , {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
const swiper1 = ()=>{
    Swiper.use([Navigation])
    var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })

}

const swiper2 = (el) =>{
  Swiper.use([Navigation])
  console.log('typeof(el)',typeof(el))
  let mySwiper2 = new Swiper('.gallery-overlay .swiper-container',{
    direction : 'horizontal',
    loop : true,
    loopFillGroupWithBlank: false,
    initialSlide : el,
    navigation :{
     nextEl: '.swiper2-button-next',
     prevEl: '.swiper2-button-prev',
      
     }
  })
}

export {swiper1 , swiper2}