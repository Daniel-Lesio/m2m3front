import { mobilemenu } from "./mobilemenu";

const fixedMenu = document.querySelector('.menu-fixed')
const menuFixedNav = document.querySelector(".menu-fixed-nav")

const scrolling = () =>{
    window.addEventListener("scroll",scrolled)
}
function scrolled(){
    
    window.pageYOffset > 200 ? fixedMenu.classList.add('menu-fixed--scrolled') : fixedMenu.classList.remove('menu-fixed--scrolled')
    if(window.pageXOffset<200){
        menuFixedNav.classList.remove('show-menu-fixed-nav')
    }
}
export { scrolling }