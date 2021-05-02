import React from 'react'

// Logic
import { usePokemonList } from '../hooks/usePokemonList'

// Components
import { CardItem } from './CardItem'
import { Loader } from './Loader'

// Styles
import '../assets/styles/components/CardsList.scss'

export const CardsList = () => {
  const [isLoading, pokemons] = usePokemonList()

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
