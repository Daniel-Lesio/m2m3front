const chosenGallery = ()=>{
    
    if(localStorage.getItem("imageCategory") == 'okolica'){
        return 3
    }
    else if(localStorage.getItem("imageCategory") == 'dzieci'){
        return 4
    }
    else{
        return 2
    }
}

export { chosenGallery }