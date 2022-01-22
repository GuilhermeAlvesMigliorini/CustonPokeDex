const pokeName = document .createElement('h2')
const exhibitionArea = document.querySelector('.exhibitionArea')

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/1/'


const pokemon = fetch(pokeURL)
.then((resp) => resp.json())


const grtData = async () => {
  pokemon.then((a) => {
    // console.log(a.name)
    pokeName.innerText = a.name
    exhibitionArea.appendChild(pokeName)
  })
  
}

 grtData()

 