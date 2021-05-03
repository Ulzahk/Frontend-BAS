import React, { useContext, useEffect } from 'react'

import { LogInForm } from '../components/LogInForm'

import { UserContext } from '../hooks/UserContext'

import '../assets/styles/containers/NotLoggedUser.scss'

export const NotLoggedUser = (props) => {
  const { controlLevelOne } = useContext(UserContext)

  const isLogged = window.localStorage.getItem('isLogged')

  useEffect(() => {
  }, [controlLevelOne])

  if (isLogged !== 'isLogged') {
    return (
      <div className='notloggeduser'>
        <h2 className='notloggeduser__title'>Security Level One</h2>
        <LogInForm title='Log In' />
      </div>
    )
  }
}
