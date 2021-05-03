import React from 'react'
import { Link } from 'react-router-dom'
import LockIcon from '../assets/static/private-lock-icon.png'

import '../assets/styles/components/SideBarMenu.scss'

export const SideBarMenu = () => {
  return (
    <header className='sidebarmenu'>
      <nav className='sidebarmenu__nav'>
        <ul className='sidebarmenu__nav--list'>
          <Link to='/'>
            <img className='sidebarmenu__logo--image' src={LockIcon} alt='Lock Icon' />
          </Link>
          <Link to='/'>
            <li>0</li>
          </Link>
          <Link to='/level-one'>
            <li>1</li>
          </Link>
          {/* <Link to='/level-two'>
            <li>2</li>
          </Link> */}
        </ul>
      </nav>
    </header>
  )
}
