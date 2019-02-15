import React, { Component } from 'react'
import { PhoneForm, List } from './components/PhoneForm'

class App2 extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'aaa',
        number: '1111'
      },
      {
        id: 1,
        name: 'bbb',
        number: '222'
      }
    ]
  }
  handleCreate = data => {
    const { information } = this.state
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = id => {
    const { information } = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  render () {
    const { information } = this.state
    return (
      <div className='asdasd'>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(information)}
        <div>
          <List data={information} onRemove={this.handleRemove} />
        </div>
      </div>
    )
  }
}

export default App2
