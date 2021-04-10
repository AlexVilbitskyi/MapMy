import React, { useState } from 'react';
import SignIn from './SignIn/SignIn.js'
import MapMy from './MapMy/MapMy.js'
import { AuthContext } from "./context/auth"
import PrivateRoute from './PrivateRoute/PrivateRoute.js'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import theme from "./theme";

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route 
              path="/login"
              render={() => !authTokens ?
                <SignIn 
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  authTokens={authTokens}
                  setAuthTokens={setAuthTokens}
                /> :
                <Redirect to="/" />
            }/>
            <PrivateRoute path="/" component={MapMy} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
