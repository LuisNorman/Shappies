import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/auth'
import { CookiesProvider } from 'react-cookie'

function Router() {

  return (
    <React.StrictMode>
      {/* what's ever wrapped in here will have the token context  */}
      <CookiesProvider>
        <BrowserRouter>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/home" component={App}/>
        </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <Router/>, // get router component from above
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
