import React, { useContext } from 'react'

/* Logic */
import { UserContext } from '../hooks/UserContext'

/* Components */
import { CreateAccountForm } from '../components/CreateAccountForm'
import { Helmet } from 'react-helmet'

/* Resources */
import '../assets/styles/containers/CreateAccount.scss'

export const CreateAccount = () => {
  const { errorsLevelOne } = useContext(UserContext)

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>BAS: Create Account Level One</title>
        <link rel='canonical' href='https://frontend-bas-ulzahk.vercel.app/level-one/create-account' />
      </Helmet>
      <div className='createaccount'>
        <h2 className='createaccount__title'>Security Level One</h2>
        {
            errorsLevelOne.createAccount !== undefined &&
              <p className='createaccount__error--information'>
                {errorsLevelOne.createAccount}
              </p>
          }
        <CreateAccountForm title='Create Account' />
      </div>
    </>
  )
}
