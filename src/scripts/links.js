const changeLink = (link) =>{
    
    const galleryBtn = document.querySelector(".gallery-btn")
    if(!link){
        console.log("empty")
    }
    console.log("prop" , link)
    galleryBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        window.location.href = 'gallery.html'
    })
}


const updateLink = (link) =>{

}

export { changeLink }