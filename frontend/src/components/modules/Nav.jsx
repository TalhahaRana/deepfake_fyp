import React from 'react'
import logo from '../assets/logo.png';
import './nav.css'
const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
      <img src={logo}/>
      </div>
      <div className='link'>
        <p>
          <a href='/'>Home</a>
        </p>
        <p>
          <a href='/upload'>Resources</a>
        </p>
        <p>
          <a href='/about'>About</a>
        </p>
        <p>
          <a href='/login'>Login</a>
        </p>
      </div>
    </div>
  )
}

export default Nav