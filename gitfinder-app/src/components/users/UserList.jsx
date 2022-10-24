import React from 'react'
import {useEffect, useState} from 'react';
import UserItem from './UserItem';

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchUsers()
    }, [])
    const fetchUsers = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, { 
                headers: {
                    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                    },
                })
                const data = await response.json();
                setUsers(data);
                setLoading(false);
        }
        catch (err){
            console.log(err);
        }
    }
    if (!loading){
        return (
            <div className='grid-container'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
          )
    }
    else{
        return <h3 className='loading-title'>Loading...</h3>
    }
}

export default UserList
