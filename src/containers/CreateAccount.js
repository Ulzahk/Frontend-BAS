import React from 'react'

import { CreateAccountForm } from '../components/CreateAccountForm'

import '../assets/styles/containers/CreateAccount.scss'


export const CreateAccount = () => {
  const logInFunction = () => {
    window.localStorage.setItem('isLogged', 'isLogged')
    window.location.reload()
  }

  return (
    <div className='createaccount'>
      <h2 className='createaccount__title'>Security Level One</h2>
      <CreateAccountForm onSubmit={logInFunction} title='Create Account' />
    </div>
  )
}