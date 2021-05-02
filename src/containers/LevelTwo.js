import React from 'react'

import { CardsList } from '../components/CardsList'

import '../assets/styles/containers/LevelTwo.scss'

export const LevelTwo = () => {
  return (
    <div className='levelzero'>
      <h2 className='levelzero__title'>Security Level One</h2>
      <CardsList />
    </div>
  )
}
