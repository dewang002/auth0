import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function LoginBtn() {
    const {loginWithRedirect}=useAuth0()
  return <button onClick={()=>loginWithRedirect()}>LogIn</button>
}

export default LoginBtn
