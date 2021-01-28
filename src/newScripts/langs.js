const lang= document.querySelector('.lang')
const langsList= document.querySelector('.langs')
const langsList2= document.querySelector('.langs2')
const lang2= document.querySelector('.lang2')
const langs = () =>{
    lang.addEventListener('click' , ()=>{
        langsList.classList.toggle('show-langs')
    })
    lang2.addEventListener('click' , ()=>{
        langsList2.classList.toggle('show-langs')
    })
}
export {langs}