import React, { useContext, useEffect, useState } from 'react'

import { LogInForm } from '../components/LogInForm'

import { UserContext } from '../hooks/UserContext'

import '../assets/styles/containers/NotLoggedUser.scss'

export const NotLoggedUser = (props) => {
  const { controlLevelOne, errorsLevelOne } = useContext(UserContext)

  const isLogged = window.localStorage.getItem('isLogged')

  useEffect(() => {
  }, [controlLevelOne])

  if (isLogged !== 'isLogged') {
    return (
      <div className='notloggeduser'>
        <h2 className='notloggeduser__title'>Security Level One</h2>
        {
          errorsLevelOne.login !== undefined &&
            <p className='notloggeduser__error--information'>
              {errorsLevelOne.login}
            </p>
        }
        <LogInForm title='Log In' />
      </div>
    )
  }
}
