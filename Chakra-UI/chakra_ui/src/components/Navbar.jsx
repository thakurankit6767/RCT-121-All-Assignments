import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div>
        <NavLink to="one">Page1</NavLink>
        <NavLink to="two">Page2</NavLink>
        <NavLink to="three">Page3</NavLink>
    </div>
  )
}

export default Navbar