import React, { useState, useContext } from 'react'
import sublinks from './data'

const GlobalContext = React.createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export const ProvideContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [text, setText] = useState('products')
  const [location, setLocation] = useState({})
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const toggleSubMenuOn = (text, location) => {
    setLocation(location)
    setText(text)
    setShowSubMenu(true)
  }
  const toggleSubMenuOff = () => {
    setShowSubMenu(false)
  }
  const choseSubMenu = () => {
    const currentSubMenu = sublinks.find((link) => link.page === text)
    return currentSubMenu
  }

  return (
    <GlobalContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
        sublinks,
        showSubMenu,
        toggleSubMenuOn,
        toggleSubMenuOff,
        choseSubMenu,
        location,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
