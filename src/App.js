import React, { Component } from 'react'
// import Login from './components/Login'
class App extends Component {
  state = {
    latitude: 0,
    longitude: 0
  }

  geolocate () {
    navigator.geolocation.getCurrentPosition(
      this.geolocationSuccess,
      this.onGeolocateError
    )
    return this.geolocationSuccess
  }
  geolocationSuccess (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
  }
  onGeolocateError (error) {
    if (error.code === 1) {
      console.log(error.message)
      // they said no
    } else if (error.code === 2) {
      console.log(error.message)
    } else if (error.code === 3) {
      console.log(error.message)
    }
  }
  componentDidMount () {
    this.geolocate()
    console.log(this.geolocate())
  }
  render () {
    return <div />
  }
}
export default App
