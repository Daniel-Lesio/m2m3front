const privacyBox = document.querySelector(".privacy")
const privacyBtn = document.querySelector(".privacy-btn")


const privacy = () =>{
    console.log('xxx : ', localStorage.getItem("privacyStatus"))
    if(localStorage.getItem("privacyStatus") === "confirmed"){
        privacyBox.classList.remove("show-privacy")

    }
    else{
        privacyBox.classList.add("show-privacy")

    }
    
    privacyBtn.addEventListener("click",()=>{
        privacyBox.classList.remove("show-privacy")
        localStorage.setItem("privacyStatus", "confirmed")
    })


}

export { privacy }