import React, { useContext } from 'react'

import { CreateAccountForm } from '../components/CreateAccountForm'

import '../assets/styles/containers/CreateAccount.scss'
import { UserContext } from '../hooks/UserContext'

export const CreateAccount = () => {
  const { errorsLevelOne } = useContext(UserContext)

  return (
    <div className='createaccount'>
      <h2 className='createaccount__title'>Security Level One</h2>
      {
          errorsLevelOne.createAccount !== undefined &&
            <p className='createaccount__error--information'>
              {errorsLevelOne.createAccount}
            </p>
        }
      <CreateAccountForm title='Create Account' />
    </div>
  )
}
