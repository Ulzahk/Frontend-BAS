import React from 'react'

import { LogInForm } from '../components/LogInForm'

import '../assets/styles/containers/NotLoggedUser.scss'

export const NotLoggedUser = () => {
  const isLogged = window.localStorage.getItem('isLogged')

  const logInFunction = () => {
    window.localStorage.setItem('isLogged', 'isLogged')
    window.location.reload()
  }

  if (isLogged !== 'isLogged') {
    return (
      <div className='notloggeduser'>
        <h2 className='notloggeduser__title'>Security Level One</h2>
        <LogInForm onSubmit={logInFunction} title='Log In' />
      </div>
    )
  }
}
