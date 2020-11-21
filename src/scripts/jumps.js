import jump from 'jump.js'


const jumps = ()=>{
    const links = document.querySelectorAll('[data-scrollto]')
    if(!links){
        return null
    }
    
    [...links].forEach(element => {
        element.addEventListener('click',(e)=>{
            e.preventDefault();
            jump(`${element.dataset.scrollto}-target`,{
                offset: -100,
            })
        })
        
    });
    
}
export { jumps }