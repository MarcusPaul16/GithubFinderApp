import React from 'react'
import {useEffect, useContext} from 'react';
import UserItem from './UserItem';
import GithubContext, { GithubProvider } from '../../context/github/GithubContext';

function UserList() {
    const {users, loading, searchUsers} = useContext(GithubContext)
    debugger;
    useEffect(() => {
       // fetchUsers()
    }, [])
    if (!loading){
        return (
            <div className='grid-container'>
                {users.map((user) => (
                    <UserItem key={user.id} login={user.login} avatar_url={user.avatar_url}/>
                ))}
            </div>
          )
    }
    else{
        return <h3 className='loading-title'>Loading...</h3>
    }
}

export default UserList
