/*
This handles the locker page
*/

import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import NavbarPage from './navbar';
import '../locker.css';
import {useFetch} from '../hooks/useFetch';

function Locker() {

    const [data, loading, error] = useFetch();

    const [token, setToken, deleteToken] = useCookies(['mr-token']) // movie rater token = name of cookie

    // If token changes, check if token is still available
    // redirect to auth if not present
    useEffect(() => {
        if (!token['mr-token']) window.location.href = '/'
        }, [token]
    )

    return (
        <div className="locker-page">
            <NavbarPage/>
            <div className="locker-container">
                <h1>Locker page</h1>
            </div>
        </div>
    )
}

export default Locker;