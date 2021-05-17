import React from 'react'
import { NavLink } from 'react-router-dom'
import './Layout.scss'
import logo from '../../img/logo.png'

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <span>Speed</span>Sort
          </div>
          <nav className="header__nav">
            <NavLink
              className="header__link"
              to="/"
              exact
            >Home</NavLink>
            
            <NavLink
              className="header__link"
              to="/about"
            >About</NavLink>
          </nav>
        </div>
      </header>
      <main className="main">
        { children }
      </main>
    </> 
  )
}

export default Layout