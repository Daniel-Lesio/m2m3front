const oferta8 = document.querySelector('.oferta8')
const oferta6 = document.querySelector('.oferta6')

const oferta = ()=>{
    oferta6.addEventListener('click',()=>{
        oferta8.classList.remove("btn--active")
        oferta6.classList.add("btn--active")
        
        document.querySelector('.oferta-1 .cena').innerHTML = document.querySelector('.oferta-1 .cena').dataset['cena-1']
        document.querySelector('.oferta-2 .cena').innerHTML = document.querySelector('.oferta-2 .cena').dataset['cena-1']
        document.querySelector('.oferta-3 .cena').innerHTML = document.querySelector('.oferta-3 .cena').dataset['cena-1']
        document.querySelector('.oferta-4 .cena').innerHTML = document.querySelector('.oferta-4 .cena').dataset['cena-1']
      })
      oferta8.addEventListener('click',()=>{
        oferta6.classList.remove("btn--active")
        oferta8.classList.add("btn--active")

        document.querySelector('.oferta-1 .cena').innerHTML = document.querySelector('.oferta-1 .cena').dataset['cena-2']
        document.querySelector('.oferta-2 .cena').innerHTML = document.querySelector('.oferta-2 .cena').dataset['cena-2']
        document.querySelector('.oferta-3 .cena').innerHTML = document.querySelector('.oferta-3 .cena').dataset['cena-2']
        document.querySelector('.oferta-4 .cena').innerHTML = document.querySelector('.oferta-4 .cena').dataset['cena-2']

      })
   
}

export { oferta }

