import React, { useState } from 'react'

// Logic
import { usePokemonList } from '../hooks/usePokemonList'

// Components
import { CardItem } from './CardItem'
import { Loader } from './Loader'

// Styles
import '../assets/styles/components/CardsList.scss'

export const CardsList = () => {
  const [isLoading, pokemons, allPokemons, setPokemons] = usePokemonList()
  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    setQuery(text)

    // eslint-disable-next-line no-unused-expressions
    text === undefined ? '' : text

    const pokemonsFiltered = allPokemons.filter((pokemon) => {
      if (pokemon.types[1]) {
        return (
          pokemon.name.toLowerCase().includes(text.toLowerCase()) ||
          pokemon.types[0].type.name.toLowerCase().includes(text.toLowerCase()) ||
          pokemon.types[1].type.name.toLowerCase().includes(text.toLowerCase())
        )
      }

      return (
        pokemon.name.toLowerCase().includes(text.toLowerCase()) ||
        pokemon.types[0].type.name.toLowerCase().includes(text.toLowerCase())
      )
    })
    setPokemons(pokemonsFiltered)
  }

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <div className='cardlist__search--container'>
        <div className='cardlist__search--wrapper'>
          <p className='cardlist__searchtitle'>Which first generation pokémon are you looking for?</p>
          <input
            className='cardslist__searchbar'
            value={query}
            placeholder='Search by name or type...'
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      </div>
      <div className='cardslist__container'>
        {pokemons.length === 0 && <p className='cardslist__notfound--message'>Nothing Found</p>}
        {pokemons.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            types={item.types}
          />
        ))}
      </div>
    </>
  )
}
