import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

class Login extends Component {
  responseGoogle (response) {}

  render () {
    return (
      <GoogleLogin
        clientId='629478743345-pto5adbsdrkcvtlbvehjq06qt2gvfln7.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      />
    )
  }
}

export default Login
