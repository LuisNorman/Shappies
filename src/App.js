/* 
This page handles the homepage
*/


import React, { useState, useEffect } from 'react';
import './Home.css'
import { useCookies } from 'react-cookie';
import {useFetch} from './hooks/useFetch';
import NavbarPage from './components/navbar'

function App() {

  const [token, setToken, deleteToken] = useCookies(['mr-token']) // movie rater token = name of cookie
  const [data, loading, error] = useFetch();

  // If token changes, check if token is still available
  // redirect to auth if not present
  useEffect(() => {
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
    <div className="Home">
        <NavbarPage/>
      <div className="layout"> 
        </div>
    </div>
  );
}
export default App;
