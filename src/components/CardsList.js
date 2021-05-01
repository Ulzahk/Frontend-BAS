import React, { useState, useEffect } from 'react'

// Components
import { CardItem } from './CardItem'
import { Loader } from './Loader'

// Styls
import '../assets/styles/components/CardsList.scss'

export const CardsList = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [controlVariable, setControlVariable] = useState(false);
  const [pokemons, setPokemons] = useState([])

  const fetchPokemon = async () => {
    const response = await window.fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemonList = await response.json()

    const pokemonsArray = []
    await Promise.all(pokemonList.results.map(async (pokemon) => {
      const pokemonResponse = await window.fetch(pokemon.url)
      const pokemonUniqueData = await pokemonResponse.json()
      pokemonsArray.push(
        {
          id: pokemonUniqueData.id,
          name: pokemonUniqueData.name,
          url: pokemonUniqueData.sprites.front_default,
          types: pokemonUniqueData.types
        }
      )
    }))

    const finalPokemonArray = [...pokemonsArray.sort((a, b) => a - b)]

    setIsLoading(false)
    return finalPokemonArray
  }

  useEffect(() => {
    (async () => {
      const data = await fetchPokemon()
      console.log(data)
      setPokemons(data)
      console.log(pokemons)
      setControlVariable(true)
    })()
  }, [controlVariable])

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <div className='cardslist__container'>
        {pokemons.map((item) => (
          <CardItem
            key={item.id}
            name={item.name}
            url={item.url}
            types={item.types}
          />
        ))}
      </div>
    </>
  )
}
