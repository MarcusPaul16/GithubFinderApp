import React from 'react'
import {FaLink} from 'react-icons/fa'

function RepoItem({name, url, language}) {
  return (
    <div className='repo-item-container'>
      <h1 className='repo-title'>{name}</h1>
      <a href={url} className='url-link'>
        <FaLink/> {url}
        </a>
      <h3 className='language'>{`Primary language: ${language}`}</h3>
    </div>
  )
}

export default RepoItem
