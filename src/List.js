import React, { Component } from 'react'

class List extends React.Component {
  render () {
    return (
      <div className='list-group'>
        <li>name : {this.props.name}</li>
      </div>
    )
  }
}
List.defaultProps = {
  name: 'default'
}

export default List
