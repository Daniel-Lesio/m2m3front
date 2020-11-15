import { mobilemenu } from "./mobilemenu";

const fixedMenu = document.querySelector('.menu-fixed')
const menuFixedNav = document.querySelector(".menu-fixed-nav")

const gallery = document.querySelector("#gallery")
const output = document.querySelector(".test-div")
const scrolling = () =>{
    window.addEventListener("scroll",scrolled)
}
function scrolled(){
    let galleryTop = ()=> Math.round(gallery.getBoundingClientRect().top)
    output.innerHTML = galleryTop()
    console.log("Rectangle : " , gallery.getBoundingClientRect())
    window.pageYOffset > 200 ? fixedMenu.classList.add('menu-fixed--scrolled') : fixedMenu.classList.remove('menu-fixed--scrolled')
    if(window.pageXOffset<200){
        menuFixedNav.classList.remove('show-menu-fixed-nav')
    }

}
export { scrolling }