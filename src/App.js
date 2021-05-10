import React, { Component, useState } from 'react';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import './scss/style.scss';
import Login from './views/pages/login/Login';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
//const Login = React.lazy(() => import('./views/pages/login/Login'));

function App()  {
  const[token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }

export default App;
