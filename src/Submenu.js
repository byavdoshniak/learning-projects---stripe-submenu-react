import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { showSubMenu, choseSubMenu, location } = useGlobalContext()

  const container = useRef(null)
  const { center, bottom } = location
  useEffect(() => {
    const submenu = container.current
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])
  const { page, links } = choseSubMenu()
  return (
    <aside
      className={`${showSubMenu ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${links.length}`}>
          {links.map((link) => {
            const { label, icon, url } = link
            return (
              <a href={url} key={label}>
                {icon} {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
