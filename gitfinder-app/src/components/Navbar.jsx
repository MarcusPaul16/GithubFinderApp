import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) { 
  return (
    <nav className='navbar bg-neutral shadow-lg mb-12 text-neutral-content'>
        navbar
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
