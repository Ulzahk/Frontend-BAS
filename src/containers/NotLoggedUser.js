import React from 'react'

import { LogInForm } from '../components/LogInForm'

import '../assets/styles/containers/NotLoggedUser.scss'

export const NotLoggedUser = (props) => {
  const isLogged = window.localStorage.getItem('isLogged')

  if (isLogged !== 'isLogged') {
    return (
      <div className='notloggeduser'>
        <h2 className='notloggeduser__title'>Security Level One</h2>
        <LogInForm title='Log In' />
      </div>
    )
  }
}
