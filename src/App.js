import React, { useState, useEffect } from 'react';
import './App.css';
import { useCookies } from 'react-cookie';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {useFetch} from './hooks/useFetch';


function App() {

  const [token, setToken, deleteToken] = useCookies(['mr-token']) // movie rater token = name of cookie
  const [data, loading, error] = useFetch();

  // If token changes, check if token is still available
  // redirect to auth if not present
  useEffect(() => {
    console.log(token);
    if (!token['mr-token']) window.location.href = '/'
    }, [token]
  )

  const logoutUser = () => {
    deleteToken(['mr-token']);
  }

  // If loading, disp loading page
  if (loading) return <h1>Loading...</h1>
  
  // If error, display errors
  if (error) return <h1>Error loading homepage: {error}</h1>

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1> 
          <span> Home</span>
        </h1> */}
        
        {/* <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser}/> */}
      </header>
      <div className="custom_navbar">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" class="navbar-brand">
                    <header>Shappies</header>
                    {/* <img src="images/logo.svg" height="28" alt="Shappies"></img> */}
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">Profile</a>
                        <a href="#" class="nav-item nav-link">Locker</a>
                        <a href="#" class="nav-item nav-link disabled" tabindex="-1">Stats</a>
                    </div>
                    <div class="navbar-nav ml-auto">
                        <a href="javascript:void(0);" onClick={logoutUser} class="nav-item nav-link">Logout</a>
                    </div>
                </div>
            </nav>
      </div>
      <div className="layout"> 
        </div>
    </div>
  );
}
export default App;
