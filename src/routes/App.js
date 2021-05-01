import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'
// import { Home } from '../containers/Home'
import { LevelZero } from '../containers/LevelZero'
import { LevelOne } from '../containers/LevelOne'
import { LevelTwo } from '../containers/LevelTwo'

import '../assets/styles/containers/App.scss'

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={LevelZero} />
        <Route exact path='/level-one' component={LevelOne} />
        <Route exact path='/level-two' component={LevelTwo} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
