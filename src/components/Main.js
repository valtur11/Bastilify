import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import ProductDetails from './ProductDetails'
import AuthForm from './AuthForm'
import { authUser } from '../auth'

const Main = props => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={props => {
          return (
            <>
              {localStorage.getItem('jwtToken') ? (<Homepage {...props} />) : (<Redirect to='/signin' />)}
            </>
          )
        }}
        />
        <Route
          exact
          path='/signin'
          render={props => {
            return (
              <AuthForm
                errs={{ message: null }}
                btnTxt='Log in'
                heading='Hi!'
                authUser ={authUser}
                {...props}
              />
            )
          }}
        />
        <Route
          exact
          path='/signup'
          render={props => {
            return (
              <AuthForm
                btnTxt='Sign up'
                heading='Join now'
                {...props}
              />
            )
          }}
        />
        <Route path='/products/laptops/:id' component={ProductDetails} />
      </Switch>
    </div>
  )
}

export default Main
