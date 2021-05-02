import React from 'react'
import { Link } from 'react-router-dom'

import { useInputValue } from '../hooks/useInputValue'

import '../assets/styles/components/LoginForm.scss'

export const LogInForm = ({ onSubmit, title }) => {
  const user = useInputValue('')
  const password = useInputValue('')
  const userPlaceholder = 'Username or Email'
  const passwordPlaceholder = 'Password'

  return (
    <div className='loginform__container'>
      <h2 className='loginform__title'>{title}</h2>
      <form className='loginform__form' onSubmit={onSubmit}>
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
