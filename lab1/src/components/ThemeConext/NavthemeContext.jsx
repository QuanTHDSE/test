import React from 'react'
import { useState, useEffect } from 'react'

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}

const NavThemeContext = React.createContext(initialState)

function NavThemeProvider({ children }) {
  const [dark, setDark] = useState(false) 
  
  useEffect(() => {
    const isDark = localStorage.getItem('navDark') === 'true'
    setDark(isDark)
  }, [dark])
  
  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('navDark', JSON.stringify(isDark))
    setDark(isDark)
  }
  
  const theme = dark ? themes.dark : themes.light
  
  return (
    <NavThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </NavThemeContext.Provider>
  )
}

export { NavThemeProvider, NavThemeContext }