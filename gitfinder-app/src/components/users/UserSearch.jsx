import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')

    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === ''){
            alert('You need to enter something')
        }
        else{
            setText('');
            searchUsers(text);
        }
    }

  return (
    <div className='search-container'>
        <input placeholder='Enter the username' className='search-input' onChange={handleChange} value={text}></input>
        <button className='search-button' onClick={handleSubmit}>Search</button>
        <button className='clear-button' onClick={clearUsers}>Clear</button>
    </div>
  )
}

export default UserSearch
