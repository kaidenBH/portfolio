import React from 'react'
import{ RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='haitem_navbar'>
        <div className='haitem_navbar-links'>
          <div className='haitem_navbar-links_logo'>
            <img src={logo} alt="logo"/>
          </div>
          <div className='haitem_navbar-links_container'>
            <p><a href="#portfolio">Portfolio</a></p>
            <p><a href="#Haitem">About me</a></p>
            <p><a href="#contact">Contact me</a></p>
          </div>
        </div>
    </div>
  )
}

export default Navbar