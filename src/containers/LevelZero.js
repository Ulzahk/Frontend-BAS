import React from 'react'

import { CardsList } from '../components/CardsList'

import '../assets/styles/containers/LevelZero.scss'

export const LevelZero = () => {
  return (
    <div className='levelzero'>
      <h2 className='levelzero__title'>Security Level Zero</h2>
      <CardsList />
    </div>
  )
}
