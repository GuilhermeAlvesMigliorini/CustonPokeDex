const pokeName = document .createElement('h2')
pokeName.classList.add('pokeName')
const pokeImage = document.createElement('img')
const exhibitionArea = document.querySelector('.exhibitionArea')
const shinyBoxNormal = document.querySelector('.shinyBox-normal')
const shinyBoxShiny = document.querySelector('.shinyBox-shiny')
let pokeIndentifier = 1
let shiny = false



pokeFetch()


 function pokemonName(p){
  pokeName.innerText = p.name
  exhibitionArea.appendChild(pokeName)
 }

 function pokemonSprite(p){
   if(shiny){
     pokeImage.src = p.sprites.front_shiny
   }
   else{
    pokeImage.src = p.sprites.front_default
   }
  
  exhibitionArea.appendChild(pokeImage)
 }
 

 const serchAreaBar = document.querySelector('[sc-search-area-bar]')
 const searchButton = document.querySelector('[sc-search-button]')

 searchButton.addEventListener('click', function(){
   submitSearch()
 })

 serchAreaBar.addEventListener('keypress', function(){
   
   if(event.keyCode === 13){
     event.preventDefault()
     submitSearch()
   }
 })

 function pokeFetch(){
  let pokeURL = `https://pokeapi.co/api/v2/pokemon/${pokeIndentifier}`
  const pokemon = fetch(pokeURL)
  .then((resp) => resp.json())
  
  
  const getData = async () => {
    pokemon.then((a) => {
      pokemonName(a)
      pokemonSprite(a)
    })
  }
  
   getData()
 }

 function submitSearch(){
  pokeIndentifier = serchAreaBar.value
  pokeFetch()
 }

 shinyBoxNormal.addEventListener('click', function(){
   shiny = false
   if(shiny === true){
     submitSearch()
   }
 })

 shinyBoxShiny.addEventListener('click', function(){
   shiny = true
   if(shiny === false){
    submitSearch()
  }
 })