import axios from 'axios'

const pokemonInd = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default pokemonInd