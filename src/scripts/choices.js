const choicesbtns = document.querySelectorAll(".choices h2")
import { localGallery } from './locals'
const choices = document.querySelectorAll(".choices h2")
const galleryChoices = document.querySelectorAll('.gallery-choice')
const galleryImages = document.querySelectorAll('.grid__box img')

const choiceScript = () =>{
    const x = (name)=>{
        switch(name){
            case 'domki':
                return 0
            case 'dzieci':
                return 1
            case "okolica":
                return 2
            default:
                return 0
        }
    }
    galleryImages.forEach(el=>{
        
        changeImages(el,x(localStorage.getItem("imageCategory")))


    })
    galleryChoices.forEach((gc,index)=>{
        gc.classList.remove('active')
        if(index === x(localStorage.getItem("imageCategory"))){
            gc.classList.add("active")
        }
        
    })

      
    for (let i = 0; i < galleryChoices.length; i++) {
        galleryChoices[i].addEventListener('click',()=>{
            galleryImages.forEach(el=>{
                changeImages(el ,i)
            })
        })


   }

    
    choicesbtns.forEach(choice=>{
        
      choice.addEventListener('click',()=>{       
         console.log('choice: ',choice)
         let expr = choice.dataset.nr
         switch(expr){
             case '0':
                 localGallery("domki")
                 break
             case '1':
                 localGallery("dzieci")
                 break
             case '2':
                 localGallery("okolica")
             break
             default:
                 return
         }
         choices.forEach(ch=>ch.classList.remove('active')) 
         choice.classList.add('active')    
 
        
      })
    })  
}

const changeImages = (el , id) =>{
    el.classList.add('hide-img')
    if(el.dataset.choice == id ){
      el.classList.remove('hide-img')
    }
}
export { choiceScript }