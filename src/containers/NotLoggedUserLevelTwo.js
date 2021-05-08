import React, { useState } from 'react'

import { OTPLogInForm } from '../components/OTPLoginForm'
import { OTPCodeForm } from '../components/OTPCodeForm'

import '../assets/styles/containers/NotLoggedUser.scss'

export const NotLoggedUserLevelTwo = () => {
  const [stepCounter, setStepCounter] = useState(0)
  const isLoggedAWS = window.localStorage.getItem('isLoggedAWS')

  const logInFunction = () => {
    window.localStorage.setItem('isLoggedAWS', 'isLoggedAWS')
    window.location.reload()
  }

  if (isLoggedAWS !== 'isLogged') {
    return (
      stepCounter === 0
        ?
          <div className='notloggeduser'>
            <h2 className='notloggeduser__title'>Authentication Level Two</h2>
            <OTPLogInForm onSubmit={logInFunction} title='Send OTP' />
          </div>
        :
          <div className='notloggeduser'>
            <h2 className='notloggeduser__title'>Authentication Level Two</h2>
            <OTPCodeForm onSubmit={logInFunction} title='OTP Validation' />
          </div>
    )
  }
}
