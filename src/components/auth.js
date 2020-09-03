/*
Handles the login/welcome page
*/

import React, {useState,  useEffect} from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import '../App.css';
import NavbarPage from '../components/navbar_welcome'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [ isLoginView, setIsLoginView] = useState(true);
    const [invalidLogin, setInvalidLogin] = useState(false)


    const [token, setToken] = useCookies(['mr-token']) // movie rater token = name of cookie
    
    
    const loginClicked = () => {
        API.loginUser({username, password}) // Add curly braces around so it can be a json object
        .then(resp => _setToken(resp)) // pass the response to set token incase a failed login attemp
        .catch(error => console.log("Error logging in!\n" + error )) 
    }

    // Check response of login and disp the appropriate page
    const _setToken = (resp) => {
        if (resp.token) setToken('mr-token', resp.token)
        else {
            setInvalidLogin(true)
        }
    }

    useEffect(() => {
        // token object is empty so check for if token object has an attribute token (token.token) or token[mr-token]
        if (token['mr-token']) window.location.href = '/home';
    }, [token]) // this effect/function is fired off everytime a token gets set

    const registerClicked = () => {
        API.registerUser({email, username, password}) // Add curly braces around so it can be a json object
        .then(() => loginClicked())
        .catch(error => console.log(error)) 
    }

    let isDisabled
    if (isLoginView)
        isDisabled = username.length === 0 || password.length === 0 
    else
        isDisabled = email.length === 0 || username.length === 0 || password.length === 0
    

    // // login or register when ENTER is pressed
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (isLoginView ? loginClicked() : registerClicked());
        }
    }

    return (
        <div className="App">
            <NavbarPage/>

            {/* <div className="row"> */}

                {/* LEFT COLUMN */}
                {/* <div className="column welcome_logo"> */}
                    <h1 className="welcome_logo">Shappies</h1>
                    <p className="welcome_message">Where friends and fitness are gained</p>
                {/* </div> End Column */}

                {/* RIGHT COLUMN/AUTH */}
                <div className=" Auth">   
                    {/* LOGIN/REGISTRATION FORM */}
                    <div className="login-container" >

                        <header className="Welcome-header">
                            {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
                        </header>
    
                        {isLoginView ? 
                            // display user or email if login screen
                            // text-line was formerly form-control
                            <input className="text-line" id="username" type="text" placeholder="Username or Email" value={username}
                                onChange={evt => setUsername(evt.target.value)} onKeyDown={handleKeyDown}/>
                            
                            : 
                            // display email if register screen
                            <input className="form-control" id="email" type="text" placeholder="Email" value={email}
                                onChange={evt => setEmail(evt.target.value)} onKeyDown={handleKeyDown}/>
                        }
                        
                        {isLoginView ? 
                            // display password if on login screen
                            <input className="text-line" id="password" type="password" placeholder="Password" value={password}
                                onChange={evt => setPassword(evt.target.value)} onKeyDown={handleKeyDown}>
                            </input> 
                            : 
                            // Display username if register active
                            <input className="form-control" id="username" type="text" placeholder="Username" value={username}
                                onChange={evt => setUsername(evt.target.value)} onKeyDown={handleKeyDown}>
                            </input>
                        }
    
                        {isLoginView ? 
                                <span><span className="login_message">Don't have an account? </span><label onClick={() => setIsLoginView(false)}>  <u className="welcome_links">Register here!</u></label></span>
                                : 
                                <input className="form-control" id="password" type="password" placeholder="Password" value={password}
                                    onChange={evt => setPassword(evt.target.value)} onKeyDown={handleKeyDown}>
                                </input>
                        }
                        
                        {isLoginView ?
                            <br/> : 
                            <span><span className="login_message">Already have an account? </span><label onClick={() => setIsLoginView(true)}> <u className="welcome_links">Login here!</u></label></span>
                        }
                        
                        {isLoginView ? 
                            <button type="button" class="btn btn-primary btn-lg" disabled onClick={loginClicked} disabled={isDisabled}>Login</button> 
                            : 
                            <br/>
                        }
    
                        {isLoginView ? 
                            ""
                            :
                            <button type="button" class="btn btn-primary btn-lg" disabled onClick={registerClicked} disabled={isDisabled}>Register</button>
                        }
                        
                        {invalidLogin ? <p className="invalid_login">Invalid login/register information. Please try again!</p> : ''}
                    
                        <div className="welcome_terms">
                            <span className="welcome_span">
                                <ul>
                                    <li><a href="terms">Terms and Conditions</a></li>
                                    <li><a href="howToUse">Welcome Guide</a></li>
                                </ul>
                            </span>
                        </div> 
                    </div> {/*END LOGIN_CONTAINER*/}
                </div> {/*End Column/AUTH */}
            {/* </div> End row */}

            
        </div>
        
    )

   


}

export default Auth;