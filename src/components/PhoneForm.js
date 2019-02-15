import React, { Component } from 'react'

class PhoneForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onCreate(this.state)
    console.log(this.state)
    this.setState({
      name: '',
      number: ''
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          value={this.state.number}
          name='number'
          onChange={this.handleChange}
        />
        <div className='a'>{this.state.name}</div>
        <div className='a'>{this.state.number}</div>
        <button type='submit'>등록</button>
      </form>
    )
  }
}

class Item extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      number: '000',
      id: 0
    }
  }

  handleRemove = () => {
    const { info, onRemove } = this.props
    onRemove(info.id)
  }

  render () {
    const style = {
      border: '1px solid #000',
      padding: '8px'
    }
    const { name, number, id } = this.props.info
    return (
      <div style={style}>
        <div>{name}</div>
        <div>{number}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

class List extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('remove not defined')
  }
  render () {
    const { data, onRemove } = this.props
    const list = data.map(info => (
      <Item key={info.id} info={info} onRemove={onRemove} />
    ))
    return <div>{list}</div>
  }
}

export { PhoneForm, List }
