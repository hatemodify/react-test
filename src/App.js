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
        console.log(repos)
        this.setState({
          repos
        })
      })
  }

  render () {
    return (
      <div>
        <button onClick={this.parseData}>asdasd</button>
        <List repos={this.state.repos} />
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
    console.log(this)
    console.log(rows)
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

export default App
