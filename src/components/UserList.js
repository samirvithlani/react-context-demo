import React, { useContext } from 'react'
import { AppContext } from '../context';
import { User } from './User';

export const UserList = () => {

    
    const {user}= useContext(AppContext);

  return (
    <div>
        {
            user.map((user)=>{
                return <User key={user.name} user={user}/>
            })
        }
    </div>
  )
}
