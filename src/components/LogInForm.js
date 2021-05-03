import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useInputValue } from '../hooks/useInputValue'

import { UserContext } from '../hooks/UserContext'

import '../assets/styles/components/SignInForm.scss'

export const LogInForm = ({ onSubmit, title }) => {
  const { controlLevelOne, setControlLevelOne } = useContext(UserContext)

  const user = useInputValue('')
  const password = useInputValue('')
  const userPlaceholder = 'Username or Email'
  const passwordPlaceholder = 'Password'

  const logInFunction = async (event) => {
    try {
      event.preventDefault()

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: user.value, password: password.value })
      }
      const url = 'https://backend-bas-ulzahk.vercel.app/api/v1/auth/user'

      // eslint-disable-next-line no-undef
      const response = await fetch(url, requestOptions)
      const responseData = await response.json()

      if (responseData.token === undefined) return

      window.localStorage.setItem('tokenLevelOne', responseData.token)
      window.localStorage.setItem('isLogged', 'isLogged')

      setControlLevelOne(!controlLevelOne)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='loginform__container'>
      <h2 className='loginform__title'>{title}</h2>
      <form className='loginform__form' onSubmit={logInFunction}>
        <p className='loginform__text'>User</p>
        <input
          className='loginform___input'
          type='text'
          placeholder={userPlaceholder}
          {...user}
        />
        <p className='loginform__text'>Password</p>
        <input
          className='loginform___input'
          type='password'
          placeholder={passwordPlaceholder}
          {...password}
        />
        <div className='loginform__bottomtext--container'>
          <p className='loginform__bottomtext'>Need an Account?</p>
          <Link to='/level-one/create-account'>Create One</Link>
        </div>
        <button className='loginform___button'>{title}</button>
      </form>
    </div>
  )
}
