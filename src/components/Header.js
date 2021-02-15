import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <nav className='header__nav'>
        <a href='/' className='cursor'>
          AppContacts
        </a>
        <ul>
          <li>
            <a href='/' className='cursor'>
              Accueil
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
