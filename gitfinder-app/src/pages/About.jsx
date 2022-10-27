import React from 'react'
import {FaCode} from 'react-icons/fa'
function About() {
  return (
    <div className='about-container'>
      <h1 className='about-title'>
        I created this app to challenge my React skills and to learn new things about hooks as useContext, useParams and Reducers.
      </h1>
      <h1 className='about-title'> Hope you like it!</h1>
      <FaCode className='code-icon'/>
    </div>
  )
}
export default About
