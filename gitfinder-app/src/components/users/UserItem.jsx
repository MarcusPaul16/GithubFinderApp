import React from 'react'
import {Link} from 'react-router-dom'

function UserItem({avatar_url, login}) {
  return (
    <div className='user-item-container'>
      <img src={`${avatar_url}`} className='img-container'></img>
      <p className='login-name'>{login}</p>
      <Link to={`/${login}`}  style={{textDecoration: 'none'}}>
        <p className='view-profile-link'>View profile</p>
      </Link>
    </div>
  )
}

export default UserItem
