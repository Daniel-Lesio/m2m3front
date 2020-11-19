const checkbox = document.querySelector(".ct")
const checkboxIcon  = document.querySelector('.ct-x')


const contact = () =>{
    
    checkbox.addEventListener('click',()=>{
      checkboxIcon.classList.toggle('hide-checkbox')
    })
    
}

export { contact }