import React from 'react'

import { CreateAccountForm } from '../components/CreateAccountForm'

import '../assets/styles/containers/CreateAccount.scss'

export const CreateAccount = () => {
  return (
    <div className='createaccount'>
      <h2 className='createaccount__title'>Security Level One</h2>
      <CreateAccountForm title='Create Account' />
    </div>
  )
}