import jump from 'jump.js'


const jumps = ()=>{
    const links = document.querySelectorAll('[data-scrollto]')
    let x = 0
    if(!links){
        return null
    }
    
    [...links].forEach(element => {
        element.addEventListener('click',()=>{
            jump(`${element.dataset.scrollto}`)
        })
        
    });
    
}
export { jumps }