import React from 'react'

/* Components */
import { CardsList } from '../components/CardsList'
import { Helmet } from 'react-helmet'

/* Resources */
import '../assets/styles/containers/LevelZero.scss'

export const LevelZero = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>BAS: Basic Authentication System</title>
        <link rel='canonical' href='https://frontend-bas-ulzahk.vercel.app' />
      </Helmet>
      <div className='levelzero'>
        <h2 className='levelzero__title'>Authentication Level Zero</h2>
        <CardsList />
      </div>
    </>
  )
}
