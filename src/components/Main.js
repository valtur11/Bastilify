import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'

const Main = props => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={props => <Homepage {...props} />} />
      </Switch>
    </div>
  )
}

export default Main
