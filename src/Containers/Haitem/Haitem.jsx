import React from 'react'
import { Chart, Feature } from '../../components'
import './haitem.css'

const Haitem = () => {
  return (
    <div className='haitem_about section_padding' id='aboutme'>
      <div className='haitem_about-feature'>
        <Feature title="About Me" text="Hello, my name is Haitem, and I am a highly motivated individual with a strong interest in web development, particularly front-end development. I have a master's degree in artificial intelligence and have worked on several projects, including the development of a library management program and an image cryptography system based on 6-D cellular neural networks. I am a problem solver at heart, always looking for new challenges and opportunities to put my talents and experience to use in developing unique solutions. With a solid programming background and a great eye for design, I am dedicated to delivering high-quality work and always upgrading my skills in order to be at the forefront of the industry." />
      </div>
      <div className='haitem_about-heading'>
        <h1>Full stack Developer</h1>
        <Chart />
      </div>
      <div className='haitem_about-container'>
        <Feature title="Experience" text="projects like developing a library management application
                                         using Java. And some basic games such as tictactoe 15x15 and 
                                         connect four applying the algorithm minmax on them using python. 
                                         And other web applications." />
        <Feature title="Education" text="Master's degree in Computer Science. 
                                        University Mohammed Seddik Benyahia-Jijel. 
                                        2022" />
      </div>
    </div>
  )
}

export default Haitem