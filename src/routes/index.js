import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Fruit from '../pages/Fruit'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fruta/:id" component={Fruit} />
    </Switch>
  )
}

export default Routes
