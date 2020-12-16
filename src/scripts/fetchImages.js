const galleryGrid =  document.querySelector("#gallery-grid")
import {chosenGallery} from './chosenGallery'
const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const closeGallery2Icon = document.querySelector(".close-gallery2")

const choices = document.querySelector('.choices')
const carousel = document.querySelector('.galery2-carousel')



const galeria = document.querySelector(".gallery2")

closeGallery2Icon.addEventListener("click",()=>{
    galeria.classList.remove("show-gallery2")
})
const fetchImages = () =>{
    if(localStorage.getItem("imageCategory") === null){
        localStorage.setItem('imageCategory','domki')
    }    
    fillGallery()
    choices.addEventListener('click',()=>{
    fillGallery()

})


}
export {fetchImages}

const fillGallery = () =>{
    galleryGrid.innerHTML = ''
    fetch(`http://domkidobremiejsce.pl/wp-json/wp/v2/media?per_page=50&categories=${chosenGallery()}`)
        .then(res=>res.json())
        .then(data=>{
            
            data.forEach(img => {
                galleryGrid.innerHTML += `
                   <div class='gallery-box c cp'>
                       <img data-id=${img.id} src='${img.source_url}' />
                   </div>
                `
            });
            return data
        })
        .then(data=>{
            

            console.log("data : ", data)
            document.querySelectorAll(".gallery-box img").forEach(i=>{
                i.addEventListener("click",()=>{
                    carousel.innerHTML=''
                    console.log("element clicked  : " , i.dataset.id)
                    galeria.classList.add("show-gallery2")
                    data.forEach(img=>{
                        console.log('img.id :' , img.id)
                        carousel.innerHTML += `
                        <figure style='max-width:800px' class='slide-figure ${ img.id != i.dataset.id ? 'slide' : '' }'>
                        <img data-id="${img.id}"   src="${img.media_details.sizes.full.source_url}" alt="Trulli" style="width:100%">
                        </figure>
                        
                        
                        `
                    })
                        

                })
            })
            
            
        })


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



arrowLeft.addEventListener("click",()=>{
    prev()
    
})
arrowRight.addEventListener("click",()=>{
    next()
    
})



