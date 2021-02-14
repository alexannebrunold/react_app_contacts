import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='m-4 p-2 align-center border-solid border-2 border-blue-400 '>
        <h1 className='text-center font-medium'>{this.props.nom}</h1>
        <div>
          <p>Email: {this.props.email}</p>
          <p>Téléphone: {this.props.tel}</p>
        </div>
      </div>
    )
  }
}
