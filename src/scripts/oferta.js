const oferta8 = document.querySelector('.oferta8')
const oferta6 = document.querySelector('.oferta6')

const oferta = ()=>{
    oferta6.addEventListener('click',()=>{
        oferta8.classList.remove("btn--active")
        oferta6.classList.add("btn--active")
        document.querySelector('.oferta-1 .cena').innerHTML ='650 zł'
        document.querySelector('.oferta-2 .cena').innerHTML ='750 zł'
        document.querySelector('.oferta-3 .cena').innerHTML ='550 zł'
        document.querySelector('.oferta-4 .cena').innerHTML ='490 zł'
      })
      oferta8.addEventListener('click',()=>{
        oferta6.classList.remove("btn--active")
        oferta8.classList.add("btn--active")
        document.querySelector('.oferta-1 .cena').innerHTML ='750 zł'
        document.querySelector('.oferta-2 .cena').innerHTML ='850 zł'
        document.querySelector('.oferta-3 .cena').innerHTML ='650 zł'
        document.querySelector('.oferta-4 .cena').innerHTML ='590 zł'
      })
   
}

export { oferta }