import React, {useState,  useEffect} from 'react';
import { API } from '../api-service';
import { useCookies } from 'react-cookie';
import '../App.css';

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
            console.log("Here: "+resp)
        }
    }

    useEffect(() => {
        console.log(token);
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

            {/* NAVIGATION BAR  */}
            <div className="custom_navbar">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    {/* SHAPPIES LOGO */}
                    <span>
                        <a href="" className="navbar-brand">
                            <header>Shappies</header>
                            {/* <img src="images/logo.svg" height="28" alt="Shappies"></img> */}
                        </a>
                    </span>

                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        
                        <div className="navbar-nav ml-auto mr-auto">
                            <input className="form-control search_box" type="text" placeholder="Search" aria-label="Search"/>
                        </div>
                        <span>
                        <div className="navbar-nav ml-auto">
                            {isLoginView ? <a href="javascript:void(0);" onClick={() => setIsLoginView(false)} class="nav-item nav-link">Register</a> :""}
                            {!isLoginView ? <a href="javascript:void(0);" onClick={() => setIsLoginView(true)}  className="nav-item nav-link">Login</a> :""}
                        </div></span>
                    </div>
                </nav>
            </div>

            {/* LOGIN/REGISTRATION FORM */}
            <div className="login-container" >
                <header className="App-header">
                    {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
                    
                </header>

                {isLoginView ? 
                    // display user or email if login screen
                    <input className="form-control" id="username" type="text" placeholder="Username or Email" value={username}
                        onChange={evt => setUsername(evt.target.value)} onKeyDown={handleKeyDown}/>
                    : 
                    // display email if register screen
                    <input className="form-control" id="email" type="text" placeholder="Email" value={email}
                        onChange={evt => setEmail(evt.target.value)} onKeyDown={handleKeyDown}/>
                }
                
                {isLoginView ? 
                    // display password if on login screen
                    <input className="form-control" id="password" type="password" placeholder="Password" value={password}
                        onChange={evt => setPassword(evt.target.value)} onKeyDown={handleKeyDown}>
                    </input> 
                    : 
                    // Display username if register active
                    <input className="form-control" id="username" type="text" placeholder="Username" value={username}
                        onChange={evt => setUsername(evt.target.value)} onKeyDown={handleKeyDown}>
                    </input>
                }

                {isLoginView ? 
                        <span>Don't have an account? <label onClick={() => setIsLoginView(false)}>  <u className="welcome_links">Register here!</u></label></span>
                        : 
                        <input className="form-control" id="password" type="password" placeholder="Password" value={password}
                            onChange={evt => setPassword(evt.target.value)} onKeyDown={handleKeyDown}>
                        </input>
                }
                
                {isLoginView ?
                    <br/> : 
                    <span>Already have an account? <label onClick={() => setIsLoginView(true)}> <u className="welcome_links">Login here!</u></label></span>
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
            
            </div>
        </div>
        
    )

   


}

export default Auth;