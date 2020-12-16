// const images = document.querySelectorAll('[data-img]')
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const carousel = document.querySelector('.galery2-carousel')


const gallery2 = (images)=>{
    console.log("images : " , images) 
    const gallery2 = document.querySelector(".gallery2")
    const closeGallery2Icon = document.querySelector(".close-gallery2")
    closeGallery2Icon.addEventListener("click", ()=>{
        gallery2.classList.remove("show-gallery2")
    })
    images.forEach((image,index)=>{
        image.addEventListener("click",(e)=>{            
            gallery2.classList.add('show-gallery2')
            // gallery2Carousel.change(index)
            gallery2Carousel.create(index)
        })
    })
    arrowLeft.addEventListener('click' , ()=>{
        gallery2Carousel.prev()
    })
    arrowRight.addEventListener('click' , ()=>{
        gallery2Carousel.next()
    })
}

const slides = document.querySelectorAll('.slide')
// const gallery2Carousel = {
//     activeSlide : 0,
//     numberOfSlides : images.length ,  
//     next(){
//         console.log(this.activeSlide)
//         this.activeSlide < images.length -1 ?
//         this.activeSlide += 1 :
//         this.activeSlide = 0
//         this.change(this.activeSlide)
//     },
//     prev(){
        
//         console.log(this.activeSlide)
//         this.activeSlide > 0 ? 
//         this.activeSlide -= 1 : 
//         this.activeSlide = images.length -1  ; 
//         this.change(this.activeSlide)  
//     },
//     change(id){
//         let slidesInjected = document.querySelectorAll(".slide")
//         console.log('slidesInjected :' , slidesInjected)
//         slidesInjected.forEach(slide=>{
//             slide.classList.remove('slide-active')
//         })
        
//         slidesInjected[id].classList.add('slide-active')
//     },
//     create(id){
//         this.activeSlide = id
//         images.forEach((image,index)=>{
//             let img = {
//                 id : index,
//                 url : image.dataset.img,
//                 html(){
//                     return `
//                     <figure class="slide">
//                         <img data-id="${this.id}"    src="${img.url}" alt="Trulli" style="width:100%">
//                         <figcaption class='d-none'>Fig.${this.id} - Trulli, Puglia, Italy.</figcaption>
//                     </figure>
//                     `
//                 }
//             }
            
//             carousel.innerHTML += img.html()
//             document.querySelectorAll('.slide').forEach((sli, index)=>{
//                 sli.classList.remove("slide-active")  
//                 if(index === this.activeSlide){
//                     sli.classList.add("slide-active")                }

//             })
        
            
//         })
        
//     }
// }


export {gallery2  }


