import React, { Component } from 'react'

class AuthForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'admin@admin.com',
      username: '',
      password: 'admin',
      profileImgUrl: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const authType = this.props.signUp ? 'signup' : 'signin'
    this.props
      .authUser(authType, this.state)
      .then(() => {
        this.props.history.push('/')
      })
      .catch(() => {
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { email, username, password, profileImgUrl } = this.state
    const { signUp, heading, btnTxt, errs, history, removeErr } = this.props

    history.listen(() => {
      errs.message = null
    })
    return (
      <>
        <div className='row justify-content-md-center text-center'>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errs.message && (
                <div className='alert alert-danger'>{errs.message}</div>
              )}
              <label htmlFor='email'>Email</label>
              <input
                autoComplete='off'
                className='form-control'
                id='email'
                name='email'
                onChange={this.handleChange}
                type='text'
                value={email}
              />
              <label htmlFor='password'>Password</label>
              <input
                autoComplete='off'
                className='form-control'
                id='password'
                name='password'
                onChange={this.handleChange}
                type='password'
                value={password}
              />
              <button
                type='submit'
                className='bn btn-primary btn-block btn-lg'
              >
                {btnTxt}
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default AuthForm
