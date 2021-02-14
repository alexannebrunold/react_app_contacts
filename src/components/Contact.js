import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
    nom: 'Gary',
    email: 'gary@gmail.com',
    tel: '9028202930239',
  }

  render() {
    return (
      <div className='m-4 p-2 align-center border-solid border-2 border-blue-400 '>
        <h1 className='text-center font-medium'>{this.state.nom}</h1>
        <div>
          <p>Email: {this.state.email}</p>
          <p>Téléphone: {this.state.tel}</p>
        </div>
      </div>
    )
  }
}
