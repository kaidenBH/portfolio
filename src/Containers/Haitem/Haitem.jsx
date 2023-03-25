import React from 'react'
import { Chart, Feature } from '../../components'
import './haitem.css'

const Haitem = () => {
  return (
    <div className='haitem_about section_padding' id='aboutme'>
      <div className='haitem_about-feature'>
        <Feature />
      </div>
      <div className='haitem_about-heading'>
        <h1>Full stack Developer</h1>
        <Chart />
      </div>
      <div className='haitem_about-container'>
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default Haitem