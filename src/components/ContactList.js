import React, { Component } from 'react'
import Contact from './Contact'

export default class ContactList extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: 'Gary',
        email: 'gary@gmail.com',
        tel: '9028202930239',
      },
      {
        id: 2,
        nom: 'Gary1',
        email: 'gary@gmail.com',
        tel: '9028202930239',
      },
      {
        id: 3,
        nom: 'Gary2',
        email: 'gary@gmail.com',
        tel: '9028202930239',
      },
    ],
  }

  render() {
    return (
      <div>
        {this.state.contacts.map((contact) => (
          <Contact key={contact.id} nom={contact.nom} email={contact.email} tel={contact.tel} />
        ))}
      </div>
    )
  }
}
