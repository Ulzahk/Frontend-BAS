import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { useInputValue } from '../hooks/useInputValue'
import { UserContext } from '../hooks/UserContext'

import '../assets/styles/components/CreateAccountForm.scss'

export const CreateAccountForm = ({ onSubmit, title }) => {
  const { setErrorsLevelOne } = useContext(UserContext)

  const user = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const confirmPassword = useInputValue('')
  const userPlaceholder = 'Username'
  const emailPlaceholder = 'Email'
  const passwordPlaceholder = 'Password'
  const confirmPasswordPlaceholder = 'Password Confirmation'
  const history = useHistory()

  const createAccount = async (event) => {
    try {
      event.preventDefault()

      if (user.value === '' || email.value === '' ||
          password.value === '' || confirmPassword.value === '') {
        return setErrorsLevelOne({ createAccount: 'Incompleted Information' })
      }

      if (password.value !== confirmPassword.value) {
        return setErrorsLevelOne({ createAccount: 'Invalid Information' })
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.value,
          password: password.value,
          email: email.value
        })
      }
      const url = 'https://backend-bas-ulzahk.vercel.app/api/v1/users'

      // eslint-disable-next-line no-undef
      const response = await fetch(url, requestOptions)
      const responseData = await response.json()

      if (responseData === undefined) return setErrorsLevelOne({ createAccount: 'Invalid Information' })

      history.push('/level-one')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='createaccountform__container'>
      <h2 className='createaccountform__title'>{title}</h2>
      <form className='createaccountform__form' onSubmit={createAccount}>
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
