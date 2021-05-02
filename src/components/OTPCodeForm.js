import React, { useState } from 'react'
import ReactCodeInput from 'react-verification-code-input';

import '../assets/styles/components/OTPCodeForm.scss'

export const OTPCodeForm = ({ onSubmit, title }) => {
  const [codeValue, setCodeValue] = useState()

  const handleChange = value => {
    if (value.length >= 4) {
      setCodeValue(value)
    } else if (value.length === 0) {
      // console.log('empty, ', value)
    }
  }

  return (
    <div className='otpcodeform__container'>
      <h2 className='otpcodeform__title'>{title}</h2>
      <form className='otpcodeform__form' onSubmit={onSubmit}>
        <p className='otpcodeform__text'>Code</p>
        <ReactCodeInput
          type='number'
          fields={4}
          className='otpcodeform__input'
          fieldWidth={50}
          fieldHeight={50}
          onChange={handleChange}
        />
        <div className='otpcodeform___button--container'>
          {/* <button className='otpcodeform___button'>Resend OTP</button> */}
          <button className='otpcodeform___button'>Validate OTP</button>
        </div>
      </form>
    </div>
  )
}
