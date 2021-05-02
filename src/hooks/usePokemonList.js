import { useState, useEffect } from 'react'

export const usePokemonList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [controlVariable, setControlVariable] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemon = async () => {
    const response = await window.fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemonList = await response.json()

    const pokemonsArray = await Promise.all(pokemonList.results.map(async (pokemon) => {
      const pokemonResponse = await window.fetch(pokemon.url)
      const pokemonUniqueDate = await pokemonResponse.json()
      return {
        id: pokemonUniqueDate.id,
        name: pokemonUniqueDate.name,
        url: pokemonUniqueDate.sprites.front_default,
        types: pokemonUniqueDate.types
      }
    }))

    const finalPokemonArray = [...pokemonsArray.sort((a, b) => a - b)]

    setIsLoading(false)
    return finalPokemonArray
  }

  useEffect(() => {
    (async () => {
      const data = await fetchPokemon()
      setPokemons(data)
      setControlVariable(true)
    })()
  }, [controlVariable])

  return [isLoading, pokemons]
}
