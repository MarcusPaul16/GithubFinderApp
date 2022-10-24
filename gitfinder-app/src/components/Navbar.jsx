import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) { 
  return (
    <nav className='navbar'>
      <FaGithub  className='github-icon'/>
         <Link style={{textDecoration : 'none'}}to='/'>
            <h1 className='title '>{title}</h1>
         </Link>
         <button className='title-button'>
            <Link to='/' style={{textDecoration : 'none'}}>
              <h1 className='title'>Home</h1>
            </Link>
         </button>
         <button className='title-button'>
            <Link to='/about' style={{textDecoration : 'none'}}>
              <h1 className='title'>About</h1>
            </Link>
         </button>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}


export default Navbar
