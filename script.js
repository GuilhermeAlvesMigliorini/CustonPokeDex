const pokeName = document .createElement('h2')
const pokeImage = document.createElement('img')
const exhibitionArea = document.querySelector('.exhibitionArea')
let number = 1
const pokeURL = `https://pokeapi.co/api/v2/pokemon/${number}`
console.log(number)

const pokemon = fetch(pokeURL)
.then((resp) => resp.json())


const grtData = async () => {
  pokemon.then((a) => {
    // console.log(a.name)
    pokeName.innerText = a.name
    exhibitionArea.appendChild(pokeName)
    pokeImage.src = a.sprites.front_default
    exhibitionArea.appendChild(pokeImage)
  })
  
}

 grtData()

 