import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from '../../Pages/Start/Start'

const Router = () => {
  return (
    <Switch>
      <Route>
        <Start />
      </Route>
    </Switch>
  )
}

export default Router