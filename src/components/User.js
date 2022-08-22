import React from 'react'

export const User = ({user}) => {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>

            </tr>
            <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        </table>
    </div>
  )
}
