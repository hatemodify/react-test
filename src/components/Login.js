import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Login extends Component {
  // responseGoogle (response) {
  //   console.log(response)
  // }

  @observable email = ''
  @observable passwords = ''
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  render () {
    const { email, password } = this
    return (
      <>
        <input name='email' onChange={this.onChange} value={email} fluid />
        <input
          name='password'
          type='password'
          onChange={this.onChange}
          value={password}
          fluid
        />
        <button onClick={this.onSubmit}>submit</button>
      </>
      // <GoogleLogin
      //   clientId='629478743345-pto5adbsdrkcvtlbvehjq06qt2gvfln7.apps.googleusercontent.com'
      //   buttonText='Login'
      //   onSuccess={this.responseGoogle}
      //   onFailure={this.responseGoogle}
      // />
    )
  }

  @action.bound
  onChange (e) {
    const { name, value } = e.target
    this[name] = value
  }
  onSubmit () {
    const { email, password } = this
    console.log(email, password)
  }
}

export default Login
