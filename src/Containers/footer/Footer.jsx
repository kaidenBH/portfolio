import React, { useRef } from 'react'
import './footer.css'

import fw from '../../assets/fw.png';
import gw from '../../assets/gw.png';
import gitw from '../../assets/gitw.png';
import lw from '../../assets/lw.png';
import tw from '../../assets/tw.png';


const Footer = () => {
  const contactRef = useRef(null);
  return (
    <div className='haitem_footer' id='Contact' ref={contactRef}>
      <h2 className='haitem_footer-heading'>Contact me here</h2>
      <div className='haitem_footer-items'>
        <a href="https://www.linkedin.com/in/bourahla-haitem/"><img className='haitem_footer-icons linkedin' src={lw} alt="linkedin" /></a>
        <a href="https://www.facebook.com/cheh.haitem/"><img className='haitem_footer-icons facebook' src={fw} alt="facebook" /></a>
        <a href="https://twitter.com/Haitem_Breaks"><img className='haitem_footer-icons twitter' src={tw} alt="twitter" /></a>
        <a href="https://github.com/yasuoPi"><img className='haitem_footer-icons github' src={gitw} alt="github" /></a>
        <a href="mailto:haitem.bourahla7@gmail.com?subject=your subject...&body=Hello..."><img className='haitem_footer-icons gmail' src={gw} alt="gmail" /></a>
      </div>
    </div>
  )
}

export default Footer