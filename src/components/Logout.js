/*
This page handles the logout page
*/

import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import NavbarPage from './navbar';

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
        
        
          <NavbarPage/>

          <div className="logout-content">
            <h4>Are you sure you want to logout?</h4>
            <div className="btn-group">
              <button onClick={logoutUser} type="button" class="btn btn-danger logout-buttons">Yes</button>
              {/* <button a href="home">No</button> */}
              <button a href="home" type="button" class="btn btn-outline-secondary logout-buttons">No</button>
            </div>
          </div>
          
      </div>
  )

}

export default Logout;