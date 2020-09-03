/*
This page handles the logout page
*/

import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

function Logout() {

  const [token, setToken, deleteToken] = useCookies(['mr-token']) // movie rater token = name of cookie

  useEffect(() => {
    if (!token['mr-token']) window.location.href = '/'
    }, [token]
  )

  const logoutUser = () => {
    deleteToken(['mr-token']);    
  }
  

  return (
    
      <div className="logout_container">
        
          <h4>Are you sure?</h4>
          
          <button onClick={logoutUser}>Yes</button>
          <span><a href="home" >No</a></span>
      </div>
  )

}

export default Logout;