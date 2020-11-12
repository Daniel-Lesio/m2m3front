import Swiper , {Navigation} from 'swiper';
import 'swiper/swiper-bundle.css';
const swipers = ()=>{
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
export {swipers}