import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
    isContactShown: true,
  }

  showContact = () => {
    this.setState({
      isContactShown: !this.state.isContactShown,
    })
  }

  render() {
    return (
      <div className='m-4 p-2 align-center border-solid border-2 border-blue-400 '>
        <h1 className='text-center font-medium'>
          {this.props.nom}
          <i className='fas fa-sort-down ml-2 cursor-pointer' onClick={this.showContact}></i>
        </h1>
        {this.state.isContactShown ? (
          <div>
            <p>Email: {this.props.email}</p>
            <p>Téléphone: {this.props.tel}</p>
          </div>
        ) : null}
      </div>
    )
  }
}
