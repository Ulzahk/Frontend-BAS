import React, { useState }from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'
// import { Home } from '../containers/Home'
import { LevelZero } from '../containers/LevelZero'
import { LevelOne } from '../containers/LevelOne'
import { LevelTwo } from '../containers/LevelTwo'
import { NotLoggedUser } from '../containers/NotLoggedUser'
import { CreateAccount } from '../containers/CreateAccount'

import '../assets/styles/containers/App.scss'

export const App = () => {
  const isLogged = window.localStorage.getItem('isLogged')

  if (isLogged === null) {
    window.localStorage.setItem('isLogged', 'isLogged')
  }

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/' component={LevelZero} />
          {
            isLogged === 'isLogged'
              ? <Route exact path='/level-one' component={LevelOne} />
              : <Route exact path='/level-one' component={NotLoggedUser} />
          }
          <Route exact path='/level-two' component={LevelTwo} />
          <Route exact path='/level-one/create-account' component={CreateAccount} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
