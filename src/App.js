import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  render () {
    const a = data => {
      axios
        .get('http://127.0.0.1:9998/near/37.4005651/127.10944169999999')
        .then(res => {
          const a = res.data

          console.log(this)
        })
    }
    a()

    return <div>aaaaaa</div>
  }
}

export default App
