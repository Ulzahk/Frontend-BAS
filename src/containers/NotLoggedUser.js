import React, { useContext, useEffect } from 'react'

/* Logic */
import { UserContext } from '../hooks/UserContext'

/* Components */
import { Helmet } from 'react-helmet'
import { LogInForm } from '../components/LogInForm'

/* Resources */
import '../assets/styles/containers/NotLoggedUser.scss'

export const NotLoggedUser = (props) => {
  const { controlLevelOne, errorsLevelOne } = useContext(UserContext)

  const isLogged = window.localStorage.getItem('isLogged')

  useEffect(() => {
  }, [controlLevelOne])

  if (isLogged !== 'isLogged') {
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>BAS: Security Level One</title>
          <link rel='canonical' href='https://frontend-bas-ulzahk.vercel.app/level-one' />
        </Helmet>
        <div className='notloggeduser'>
          <h2 className='notloggeduser__title'>Security Level One</h2>
          {
            errorsLevelOne.login !== undefined &&
              <p className='notloggeduser__error--information'>
                {errorsLevelOne.login}
              </p>
          }
          <LogInForm title='Log In' />
        </div>
      </>
    )
  }
}
