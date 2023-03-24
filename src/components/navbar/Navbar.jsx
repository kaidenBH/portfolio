import React, {useState} from 'react'
import{ RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
const Menu = () => (
  <>
    <p><a href="#Haitem">About me</a></p>
    <p><a href="#Portfolio">Portfolio</a></p>
    <p><a href="#Contact">Contact me</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='haitem_navbar'>
      <div className='haitem_navbar-links'>
        <div className='haitem_navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='haitem_navbar-links_container'>
          <Menu /> 
        </div>
      </div>
      <div className='haitem_navbar-menu'>
        {toggleMenu
          ?<RiCloseLine color='#fff' size={27} onClick={ () => setToggleMenu(false)} />
          :<RiMenu3Line color='#fff' size={27} onClick={ () => setToggleMenu(true)} />  
        }
        {toggleMenu && (
          <div className='haitem_navbar-menu_container scale-up-center'>
            <div className='haitem_navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar