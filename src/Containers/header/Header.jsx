import React from 'react'
import './header.css'
import mypic from '../../assets/myimage.jpg';

const Header = () => {
  return (
    <div className='haitem_header section_padding' id='home'>
      <div className='haitem_header-content'>
        <h1 className='gradient_text'>Hello, My name is Haitem.</h1>
        <p>I am a Full Stack Developer. I'm skilled in HTML, CSS, JavaScript , Python, C#, and 
            I have Strong Problem solivng skills. I graduated with a Master's degree in Artificial Intelligent.</p>
        <div className='haitem_header-content_input'>
          <button type='button'>Contact Me</button>
        </div>
      </div>
      <div className='haitem_header-image'>
        <img src={mypic} alt='me' />
      </div>
    </div>
  )
  
}

export default Header