import React from 'react'

import { CardsList } from '../components/CardsList'

import '../assets/styles/containers/LevelTwo.scss'

export const LevelTwo = () => {
  const logOutFunction = () => {
    window.localStorage.setItem('isLoggedAWS', 'isLoggedOutAWS')
    window.location.reload()
  }

  return (
    <div className='levelzero'>
      <h2 className='levelzero__title'>Security Level Two</h2>
      <button onClick={logOutFunction}>Cerrar Sesión</button>
      <CardsList />
    </div>
  )
}
