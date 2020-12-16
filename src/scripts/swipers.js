
  import 'swiper/swiper-bundle.css';
  import Swiper , {Navigation} from 'swiper';
const swiper1 = ()=>{

    Swiper.use([Navigation])
    new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    // loop: true,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })
  // mySwiper.init()

}


export {swiper1 }