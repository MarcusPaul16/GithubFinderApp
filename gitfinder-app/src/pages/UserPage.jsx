import React from 'react'
import {FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import ReposList from '../components/users/ReposList'


function UserPage() {
  const {searchUser, user, searchRepositories, repositories} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    searchUser(params.login)
    searchRepositories(params.login)
  },[])

  const {name, avatar_url, bio, login, followers, following, public_repos} = user
  
  return (
    <div className='user-container'>
      <div className='user-card-container'>
        <div className='image-container'>
            <img className='user-image'src={avatar_url}></img>
            <h3 className='user-name-title-image'>{name}</h3>
        </div>
        <div className='info-container'>
          <h3 className='username-title'>{name}</h3>
          <p className='user-bio'>{bio}</p>
        </div>
      </div>
      <div className='user-stats-container'>
        <div className='stat-container'>
          <h5 className='stats-title'>Followers</h5>
          <h3 className='stats-value'>{followers}</h3>
        </div>
        <div className='stat-container'>
          <h5 className='stats-title'>Following</h5>
          <h3 className='stats-value'>{following}</h3>
        </div>
        <div className='stat-container'>
          <h5 className='stats-title'>Public Repos</h5>
          <h3 className='stats-value'>{public_repos}</h3>
        </div>
      </div>
      <ReposList repos = {repositories}/>
    </div>
  )
}

export default UserPage
