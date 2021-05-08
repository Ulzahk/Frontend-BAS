import React, { useState, useEffect, useContext } from 'react'

/* Logic */
import { UserContext } from '../hooks/UserContext'

/* Components */
import { Helmet } from 'react-helmet'
import { CardsList } from '../components/CardsList'

/* Resources */
import '../assets/styles/containers/LevelOne.scss'

export const LevelOne = () => {
  const [username, setUsername] = useState()

  const { controlLevelOne, setControlLevelOne } = useContext(UserContext)

  const logOutFunction = () => {
    window.localStorage.setItem('isLogged', 'isLoggedOut')
    window.localStorage.setItem('tokenLevelOne', '')
    setControlLevelOne(!controlLevelOne)
  }

  const getUserData = async () => {
    try {
      const token = await window.localStorage.getItem('tokenLevelOne')

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // eslint-disable-next-line quote-props
          'BearerToken': `${token}`
        }
      }
      const url = 'https://backend-bas-ulzahk.vercel.app/api/v1/users/user-data'
      // eslint-disable-next-line no-undef
      const response = await fetch(url, requestOptions)
      const responseData = await response.json()

      setUsername(responseData.user.username)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [controlLevelOne])

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>BAS: Authentication Level One</title>
        <link rel='canonical' href='https://frontend-bas-ulzahk.vercel.app/level-one' />
      </Helmet>
      <div className='levelone'>
        <h2 className='levelone__title'>Authentication Level One</h2>
        <div className='levelone__container'>
          {
            username !== undefined && <p className='levelone__text'>Welcome {username}</p>
          }
          <button className='levelone__button' onClick={logOutFunction}>Sign Out</button>
        </div>
        <CardsList />
      </div>
    </>
  )
}
