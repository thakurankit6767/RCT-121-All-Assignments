import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const NavbarDash = () => {
  return (
    <div>
        <NavLink to="Page1">PageOne</NavLink>
        <NavLink to="Page2">PageTwo</NavLink>
        
    </div>
  )
}

export default NavbarDash