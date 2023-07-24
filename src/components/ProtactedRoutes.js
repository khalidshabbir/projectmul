import React from 'react'
import Login from '../pages/Login'

const ProtactedRoutes = ({children}) => {
    const isAuthenticated=!!localStorage.getItem("token");
    if(isAuthenticated){
        return children
    }
  return <Login />
}

export default ProtactedRoutes