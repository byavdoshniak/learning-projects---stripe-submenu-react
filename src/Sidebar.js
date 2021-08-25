import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { showSidebar, toggleSidebar, sublinks } = useGlobalContext()

  return (
    <div
      className={`${showSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((link) => {
          const { page, links } = link
          return (
            <article>
              <div className='sidebar-links'>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { label, icon, url } = link
                    return (
                      <a href={url}>
                        {icon} {label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </aside>
    </div>
  )
}

export default Sidebar
