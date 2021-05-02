import React from 'react'

import { useInputValue } from '../hooks/useInputValue'

import '../assets/styles/components/OTPLogInForm.scss'

export const OTPLogInForm = ({ onSubmit, title }) => {
  const phoneNumber = useInputValue('')
  const phoneNumberPlaceholder = 'Example +573001234567'

  return (
    <div className='otploginform__container'>
      <h2 className='otploginform__title'>{title}</h2>
      <form className='otploginform__form' onSubmit={onSubmit}>
        <p className='otploginform__text'>Phone Number</p>
        <input
          className='otploginform___input'
          type='text'
          placeholder={phoneNumberPlaceholder}
          {...phoneNumber}
        />
        <button className='otploginform___button'>{title}</button>
      </form>
    </div>
  )
}
