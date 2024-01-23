import React from 'react'
import './navbar.css'
import logo from '../assets/logoimg.png'

const Navbar = () => {
  return (
    <div className='navbody'>
        <img src={logo} className='navlogo' alt="logo" />
        <div className="navlinks">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/topics">Events</a></li>
            <li><a href="/about">Team</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
