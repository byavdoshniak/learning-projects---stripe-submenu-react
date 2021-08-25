import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import Submenu from './Submenu'

const Navbar = () => {
  const { toggleSidebar, sublinks, toggleSubMenuOn, toggleSubMenuOff } =
    useGlobalContext()
  const displaySubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    toggleSubMenuOn(page, { center, bottom })
  }
  const handleCloseSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) toggleSubMenuOff()
  }
  return (
    <nav className='nav' onMouseOver={handleCloseSubMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav-logo' />
          <button className='btn toggle-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link) => {
            const { id, page } = link
            return (
              <li key={id} onMouseOver={displaySubMenu}>
                <Submenu />
                <button className='link-btn'>{page}</button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
