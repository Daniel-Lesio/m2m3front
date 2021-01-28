import jump from 'jump.js'


const jumps = ()=>{
    const links = document.querySelectorAll('[data-scroll]')
    if(!links){
        return null
    }
    
    [...links].forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            jump(`#${element.dataset.scroll}`,{
                offset: -100,
            })
        })
        
    });
    
}
export { jumps }