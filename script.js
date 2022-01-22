const pokeName = document .createElement('h2')
const pokeImage = document.createElement('img')
const exhibitionArea = document.querySelector('.exhibitionArea')
let number = 1

const pokeURL = `https://pokeapi.co/api/v2/pokemon/${number}`

const pokemon = fetch(pokeURL)
.then((resp) => resp.json())


const getData = async () => {
  pokemon.then((a) => {
    pokemonName(a)
    pokemonSprite(a)
  })
  
}

 getData()


 function pokemonName(p){
  pokeName.innerText = p.name
  exhibitionArea.appendChild(pokeName)
 }

 function pokemonSprite(p){
  pokeImage.src = p.sprites.front_default
  exhibitionArea.appendChild(pokeImage)
 }
 