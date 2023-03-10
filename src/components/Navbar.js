import React from 'react'

import { Link, NavLin, NavLink } from 'react-router-dom'

import "./Navbar.css"

export function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> 8 */}

      <NavLink to="/"//</nav> className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
      >Home</NavLink>
      
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}
