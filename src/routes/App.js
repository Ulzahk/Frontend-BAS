import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'
// import { Home } from '../containers/Home'
import { LevelZero } from '../containers/LevelZero'
import { LevelOne } from '../containers/LevelOne'
import { LevelTwo } from '../containers/LevelTwo'
import { NotLoggedUser } from '../containers/NotLoggedUser'
import { NotLoggedUserLevelTwo } from '../containers/NotLoggedUserLevelTwo'
import { CreateAccount } from '../containers/CreateAccount'

import { UserContext } from '../hooks/UserContext'

import '../assets/styles/containers/App.scss'

export const App = () => {
  const [controlLevelOne, setControlLevelOne] = useState(false)
  const [errorsLevelOne, setErrorsLevelOne] = useState({})
  const isLogged = window.localStorage.getItem('isLogged')
  const isLoggedAWS = window.localStorage.getItem('isLoggedAWS')

  if (isLogged === null) {
    window.localStorage.setItem('isLogged', 'isLoggedOut')
  }

  if (isLoggedAWS === null) {
    window.localStorage.setItem('isLoggedAWS', 'isLoggedOutAWS')
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{
        controlLevelOne,
        errorsLevelOne,
        setControlLevelOne,
        setErrorsLevelOne
      }}
      >
        <Layout>
          <Switch>
            <Route exact path='/' component={LevelZero} />
            {
              isLogged === 'isLogged'
                ? <Route exact path='/level-one' component={LevelOne} />
                : <Route exact path='/level-one' component={NotLoggedUser} />
            }
            {
              isLoggedAWS === 'isLoggedAWS'
                ? <Route exact path='/level-two' component={LevelTwo} />
                : <Route exact path='/level-two' component={NotLoggedUserLevelTwo} />
            }
            <Route exact path='/level-one/create-account' component={CreateAccount} />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
