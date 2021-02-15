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

  deleteContact = () => {
    this.props.deleteCurrentContact()
  }

  render() {
    return (
      <div className='container'>
        <h1 className='container__header'>
          {this.props.nom}
          <i className='fas fa-sort-down sort__down__icon' onClick={this.showContact}></i>
          <i className='fas fa-times delete__icon' onClick={this.deleteContact}></i>
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
