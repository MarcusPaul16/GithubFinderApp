import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div className='notfound-container'>
      <h1 className='home-title'>Oops!</h1>
      <h3 className='notfound-title'>404 - Page not found!</h3>
      <div className='button-container'>
      <Link to={'/'} style={{textDecoration : 'none'}}>
        <button className='back-to-home-button'>
            <FaHome className='back-to-home-button-icon'></FaHome>
            <p className='back-to-home-button-icon'>Back to home!</p>
        </button>
      </Link>
      </div>
    </div>
  )
}

export default NotFound
