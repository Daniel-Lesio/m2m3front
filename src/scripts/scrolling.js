
const fixedMenu = document.querySelector('.menu-fixed')
const menuFixedNav = document.querySelector(".menu-fixed-nav-2")
import sal from 'sal.js'

const indicator = document.querySelector('.indicator')
const totalHeight = (document.body.scrollHeight - window.innerHeight )

const scrolling = (page) =>{
    sal({
        once : false
    });
    if(page === 'base'){
        fixedMenu.classList.add('menu-fixed--scrolled')
    }
    let scroll_position  = window.pageYOffset
    indicator.style.width = `${scroll_position / totalHeight * 100}%` 
    
    let ticking = false 
    window.addEventListener("scroll",(e)=>{
        scroll_position = window.pageYOffset
        let scroll_units =  Math.round(scroll_position / totalHeight * 100) 
        
        if(!ticking){
            window.requestAnimationFrame(()=>{
                scrolled(scroll_position , scroll_units ,page)
            })
        }
        
    })

}


function scrolled(scroll_position , units , page){
    if(page === 'base'){

    }
    if(page === 'index'){
        scroll_position > 200  ? fixedMenu.classList.add('menu-fixed--scrolled') : fixedMenu.classList.remove('menu-fixed--scrolled')
    }
    if(scroll_position<200){
        menuFixedNav.classList.remove('show-menu-fixed-nav')
    }
    menuFixedNav.classList.remove('show-menu-fixed-nav')
    indicator.style.width = `${scroll_position / totalHeight * 100}%` 
    


}
export { scrolling }