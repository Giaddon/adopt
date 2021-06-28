import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <p><NavLink to= "/">Home</NavLink></p>
      <p><NavLink to="/pets">Pets</NavLink></p>
      <p><NavLink to="/wildlife">Wildlife</NavLink></p>
      <p><NavLink to="about">About us</NavLink></p>
    </nav>
  )
}

export default Nav;