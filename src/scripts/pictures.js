// const picturesSection = document.querySelector("#pictures")
// const pictures = document.querySelectorAll('.picture')
const BASE_URL = 'http://localhost/dm/wp-json/wp/v2/media' 
const picturesGrid = document.querySelector('.pictures')
const picturesFoo =  () =>{
    
     fetchPictures(BASE_URL)
    

        
}

const fetchPictures = (url ,category )=>{
    picturesGrid.innerHTML = '<h1>Wczytuję ... </h1>'
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        picturesGrid.innerHTML = ''
        data.forEach((el,index) => {
            console.log("element : " , el)
            picturesGrid.innerHTML += `
                <figure class='picture'>
                  
                  <img src="${el.source_url}" srcset="${el.source_url}" alt="Flowers" >

                  
                </figure>
            `
        });
        console.log('picturesGrid : ' ,picturesGrid)
    })
    .catch(err=>console.log(err))
} 
export {picturesFoo}