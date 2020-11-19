
const galleryName = (nr) =>{
    switch(nr){
        case '0':
            return 'domki'
        case '1':
            return 'dzieci'
        case '2':
            return 'okolica'
        default:
            return 'dzieci'
    }
}




const localGallery = (cat)=>{
    console.log("cat: " , cat)
    if(!cat){
        return null
    }
    
    
    localStorage.setItem("imageCategory" , cat) 
}


const xxx = (expr) =>{
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
}

const localPrivacy = () =>{
    let privacyStatus = localStorage.getItem('privacyStatus')
    if(!privacyStatus){
        localStorage.setItem('privacyStatus','confirmed')
    }
}

export { localGallery , localPrivacy, galleryName }