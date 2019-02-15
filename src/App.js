import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  parseData = data => {
    fetch('http://127.0.0.1:9998/near/37.4005651/127.10944169999999')
      .then(response => response.json())
      .then(repos => {
        this.setState({
          repos
        })
      })
  }

  componentDidMount () {
    this.parseData()
  }
  render () {
    return (
      <div>
        <button onClick={this.parseData}>asdasd</button>
        <List repos={this.state.repos} />
        <Count />
      </div>
    )
  }
}

class List extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let rows = []
    this.props.repos.map((repo, index) =>
      rows.push(<Item key={index} repo={repo} />)
    )

    return <div className='list-group'>{rows}</div>
  }
}
List.defaultProps = {
  repos: []
}

class Item extends React.Component {
  render () {
    return (
      <li>
        <div>{this.props.repo.shop_name}</div>
      </li>
    )
  }
}

class Count extends React.Component {
  state = {
    number: 0
  }

  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount (deprecated)')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate')
    if (nextState.number % 5 === 0) {
      console.log(nextState.number)
      return false
    } else {
      return true
    }
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  handleIncrease = () => {
    this.setState(({ number }) => ({
      number: number + 1
    }))
  }
  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }))
  }
  render () {
    return (
      <div>
        {this.state.number}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}

export default App
