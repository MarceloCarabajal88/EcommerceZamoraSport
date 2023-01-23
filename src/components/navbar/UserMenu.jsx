import React from 'react'
import { useContext } from 'react'

function UserMenu() {

   const context= useContext(userContext);

  return (
    <div>
        <p>Usuario</p>
    </div>
  )
}

export default UserMenu