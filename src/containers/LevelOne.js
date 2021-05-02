import React from 'react'

import { CardsList } from '../components/CardsList'

import '../assets/styles/containers/LevelOne.scss'

export const LevelOne = () => {
  const logOutFunction = () => {
    window.localStorage.setItem('isLogged', 'isLoggedOut')
    window.location.reload()
  }

  return (
    <div className='levelzero'>
      <h2 className='levelzero__title'>Security Level One</h2>
      <button onClick={logOutFunction}>Cerrar Sesión</button>
      <CardsList />
    </div>
  )
}
