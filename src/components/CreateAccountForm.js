import React from 'react'

import { useInputValue } from '../hooks/useInputValue'

import '../assets/styles/components/CreateAccountForm.scss'

export const CreateAccountForm = ({ onSubmit, title }) => {
  const user = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const confirmPassword = useInputValue('')
  const userPlaceholder = 'Username'
  const emailPlaceholder = 'Email'
  const passwordPlaceholder = 'Password'
  const confirmPasswordPlaceholder = 'Password Confirmation'

  return (
    <div className='createaccountform__container'>
      <h2 className='createaccountform__title'>{title}</h2>
      <form className='createaccountform__form' onSubmit={onSubmit}>
        <p className='createaccountform__text'>User</p>
        <input
          className='createaccountform___input'
          type='text'
          placeholder={userPlaceholder}
          {...user}
        />
        <p className='createaccountform__text'>Email</p>
        <input
          className='createaccountform___input'
          type='email'
          placeholder={emailPlaceholder}
          {...email}
        />
        <p className='createaccountform__text'>Password</p>
        <input
          className='createaccountform___input'
          type='password'
          placeholder={passwordPlaceholder}
          {...password}
        />
        <p className='createaccountform__text'>Confirm Password</p>
        <input
          className='createaccountform___input'
          type='password'
          placeholder={confirmPasswordPlaceholder}
          {...confirmPassword}
        />
        <button className='createaccountform___button'>{title}</button>
      </form>
    </div>
  )
}
