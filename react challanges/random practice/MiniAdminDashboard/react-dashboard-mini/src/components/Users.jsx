import React, { useEffect } from 'react'
import users from './Users';

export const Users = () => {
  useEffect(() => {
    console.log(users);
  }, [])

  return (
    <>
   <div>
       <div><h1>Users</h1></div>
      <table border={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item) => 
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            )
          }
        </tbody>
      </table>
   </div>
    </>
  )
}

export default Users;