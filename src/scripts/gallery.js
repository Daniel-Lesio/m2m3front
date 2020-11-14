import { swiper2 } from './swipers'
const swiperWrapper = document.querySelector('.swiper-light-wrapper')
const images = document.querySelectorAll('[data-img]')
const galleryOverlay = document.querySelector(".gallery-overlay")
const closeIcon2 = document.querySelector(".close-icon2")
const swiper2Btns = document.querySelectorAll('.swiper2-button')
const galleryScript = ()=> {
    swiper2Btns.forEach(btn=>{
        btn.addEventListener("mouseover",()=>{
            document.querySelectorAll('.gallery-image').forEach((slide)=>{
                slide.style.filter = 'sepia(100%)'
                slide.style.transform = 'scale(0.9)'
            })
        })
        btn.addEventListener("mouseleave",()=>{
            
            document.querySelectorAll('.gallery-image').forEach((slide)=>{
                slide.style.filter = 'sepia(0%)'
                slide.style.transform = 'scale(1)'
            })
        })
    })
    
    let imagesLength = images.length;
    const urls = []
    images.forEach((image,index)=>{
        urls.push({
            id : index,
            url : image.dataset.img     
        })
        
        image.addEventListener('click',()=>{
            galleryOverlay.classList.remove("hide-gallery")
            swiper2(index)            
            
            
            
        })
        console.log('image' , image.dataset.img)
        
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
                        // <img class="gallery-image" src=${images[index].dataset.img} alt="" />
            
</div>
        `
    })
    console.log(urls)
    // console.log(urls)
    closeIcon2.addEventListener('click',()=>{
        
        galleryOverlay.classList.add('hide-gallery')

    })
return
}

export { galleryScript }