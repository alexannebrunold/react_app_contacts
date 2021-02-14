import React from 'react'

export default function Header() {
  return (
    <div className='w-full h-auto bg-blue-400 p-4 text-white'>
      <nav className='flex justify-between'>
        <a href='/'>AppContacts</a>
        <ul>
          <li>
            <a href='/' className='cursor-pointer'>
              Accueil
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
