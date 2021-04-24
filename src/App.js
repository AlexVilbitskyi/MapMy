import React, { useCallback, useState } from 'react';
import { AuthContext } from "./context/auth"
import PrivateRoute from './PrivateRoute/PrivateRoute.js'
import { 
  CssBaseline, 
  MuiThemeProvider, 
  Container,
  Typography
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SignIn from './logged_out/SignIn/SignIn.js'
import MapMy from './logged_in/MapMy/MapMy.js'
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: '576px',
    maxHeight: '800px'
  },
}));

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const matches = useMediaQuery('(min-width:576px)');
  const classes = useStyles();

  const setTokens = useCallback((data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }, [])

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Container
        className={matches ? classes.wrapper : null}
        style={{padding: 0}}
      >
        <Typography
          component="h1" 
          variant="h4" 
          align="center" 
          color="primary" 
          gutterBottom
          style={{display: matches ? null : 'none'}}
        >
          This is Mobile Web App. For better experience use smartphone. 😊
        </Typography>
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
                  /> :
                  <Redirect to="/" />
              }/>
              <PrivateRoute path="/" component={MapMy} />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
