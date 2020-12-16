import { chosenGallery } from './chosenGallery'
const images = document.querySelectorAll('[data-id]')
const galeria = document.querySelector(".gallery2")
const closeGallery2Icon = document.querySelector(".close-gallery2")
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const carousel = document.querySelector('.galery2-carousel')


const gallery3 = ()=>{
    
    if(localStorage.getItem("imageCategory") === null){
        localStorage.setItem('imageCategory','domki')
    }   

    images.forEach(image =>{
        image.addEventListener("click",()=>{    
            imagesFoo(image.dataset.id)
            galeria.classList.add("show-gallery2")

        })
    })
    closeGallery2Icon.addEventListener("click",()=>{
        galeria.classList.remove("show-gallery2")
    })
}

const galleryPage = () =>{
    if(localStorage.getItem("imageCategory") === null){
        localStorage.setItem('imageCategory','domki')
    }
    images.forEach(img=>{
        img.addEventListener("click",()=>{
            console.log("maggie")
        })
    })
}

const imagesFoo = (id) =>{
    carousel.innerHTML=''
    let data 
    fetch(`http://domkidobremiejsce.pl/wp-json/wp/v2/media?per_page=50&categories=${chosenGallery()}`)
    .then(response => response.json())
    .then(json => {
        data = json
        data.forEach(img =>{
            carousel.innerHTML += `
            <figure class='slide-figure ${ img.id != id ? 'slide' : '' }'>
            <img data-id="${img.id}"   src="${img.media_details.sizes.full.source_url}" alt="Trulli" style="width:100%">
            </figure>
            `
            
        })
        arrowRight.addEventListener("click" , ()=>{
            next()
        })
        arrowLeft.addEventListener("click",()=>{
            prev()
        })        
        
    })
    
    
    return data
}




const next =() =>{
    const slides = document.querySelectorAll(".slide-figure")
    const slideActive = document.querySelector('.slide-figure:not(.slide)')
    let slideActiveId  = 0
    slides.forEach((slide,index)=>{
        if(slide === slideActive){
            slideActiveId = index
            console.log('slideActiveIndex : ', slideActiveId)
        }
        slide.classList.add('slide')
    })
    
    if(slideActiveId < slides.length  - 1){
        slides[slideActiveId+1].classList.remove('slide')
        slideActiveId += 1
    }
    else{
        slideActiveId = 0 
        slides[slideActiveId+1].classList.remove('slide')
        
    }
}

const prev = () =>{
    const slides = document.querySelectorAll(".slide-figure")
    const slideActive = document.querySelector('.slide-figure:not(.slide)')
    let slideActiveId  = 0
    slides.forEach((slide,index)=>{
        if(slide === slideActive){
            slideActiveId = index
            
        }
        slide.classList.add('slide')
    })
    
    if(slideActiveId > 0){
        slides[slideActiveId-1].classList.remove('slide')
        slideActiveId -= 1
    }
    else{
        slideActiveId = slides.length -1 
        slides[slideActiveId-1].classList.remove('slide')   
    }
}
export { gallery3 , galleryPage }

