import React, { useState, useEffect } from 'react'

import { CardsList } from '../components/CardsList'

import '../assets/styles/containers/LevelOne.scss'

export const LevelOne = () => {
  const [username, setUsername] = useState()
  const logOutFunction = () => {
    window.localStorage.setItem('isLogged', 'isLoggedOut')
    window.localStorage.setItem('tokenLevelOne', '')
    window.location.reload()
  }

  const getUserData = async () => {
    try {
      const token = await window.localStorage.getItem('tokenLevelOne')

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'BearerToken': `${token}`
        }
      }
      const url = 'https://backend-bas-ulzahk.vercel.app/api/v1/users/user-data'
      const response = await fetch(url, requestOptions)
      const responseData = await response.json()

      setUsername(responseData.user.username)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData()
  })

  return (
    <div className='levelone'>
      <h2 className='levelone__title'>Security Level One</h2>
      <div className='levelone__container'>
        {
          username !== undefined && <p className='levelone__text'>Welcome {username}</p>
        }
        <button className='levelone__button' onClick={logOutFunction}>Cerrar Sesión</button>
      </div>
      <CardsList />
    </div>
  )
}
