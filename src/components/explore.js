/*
This handles the explore page
*/

import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import NavbarPage from './navbar';
import '../explore.css';
import {useFetch} from '../hooks/useFetch';


function Explore() {

    const [data, loading, error] = useFetch();
    const [token, setToken, deleteToken] = useCookies(['mr-token']) // movie rater token = name of cookie

    // If token changes, check if token is still available
    // redirect to auth if not present
    useEffect(() => {
        if (!token['mr-token']) window.location.href = '/'
        }, [token]
    )

    return (
        <div className="explore-page">
            <NavbarPage/>
            <div className="explore-container">
                <h1>Explore page</h1>
            </div>
        </div>
    )
}

export default Explore;