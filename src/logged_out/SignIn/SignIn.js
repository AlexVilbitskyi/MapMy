import React, { useState, useCallback } from 'react';
import { 
  Button, 
  TextField, 
  Container, 
  InputAdornment, 
  IconButton, 
  Grid, 
  Divider,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useAuth } from "../../context/auth";
import { Redirect } from "react-router-dom";
import GoogleBtn from '../GoogleBtn/GoogleBtn';
import background from "./backgrondSignIn.svg";
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: `url(${background}) 0px 20px no-repeat`,
    backgroundSize: 'contain'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: theme.spacing(10), 
    marginBottom: theme.spacing(10),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  customDivider: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(0.25)
  },
  customDividerGrid: {
    marginTop: theme.spacing(2),
  },
  customDividerText: { 
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  google: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function SignIn(props) {
  const {
    isLoggedIn,
    setIsLoggedIn
  } = props
  const [email, setEmail] = useState("ExampleEmail");
  const [password, setPassword] = useState("ExamplePassword");
  const [status, setStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { setAuthTokens } = useAuth();
  const classes = useStyles();

  const setLogin = useCallback(() => {
    setIsLoggedIn(true);
  }, [setIsLoggedIn]);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault()
    if (event.target.elements.password.value !== 'ExamplePassword') {
      setStatus("invalid_password")
    } else if (event.target.elements.email.value !== 'ExampleEmail') {
      setStatus("invalid_email")
    } else {
      setStatus(null)
      logIn()
    }
  }, []);

  const logIn = useCallback(async () => {
    let userInfo = {
      email,
      password
    }
    try {
      await Promise.all([setAuthTokens(userInfo), setLogin]);
    } catch(e) {
      console.log(e)
    }
  }, [email, password]);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }


  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
            <img src={logo} className={classes.logo} alt="logo"></img>
          <form className={classes.form} onSubmit={handleFormSubmit} noValidate>
            <Box component="div" className={classes.google}>
              <GoogleBtn />
            </Box>
            <Grid 
              container 
              spacing={0} 
              alignContent="center" 
              alignItems="center"
              className={classes.customDividerGrid}
            >
              <Grid item xs={5}>
                <Divider className={classes.customDivider}></Divider>
              </Grid>
              <Grid item xs className={classes.customDividerText}>
                or
              </Grid>
              <Grid item xs={5}>
                <Divider className={classes.customDivider}></Divider>
              </Grid>
            </Grid>
            <TextField
              error={status === "invalid_email"}
              helperText={status === "invalid_email" ? 'Email is incorrect!' : ''}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              size="small"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              error={status === "invalid_password"}
              helperText={status === "invalid_password" ? 'Password is incorrect!' : ''}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              size="small"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              type={isVisible ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() => {
                        setIsVisible(!isVisible);
                      }}
                      onMouseDown={(event) => {
                        event.preventDefault();
                      }}
                    >
                      {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
              // onClick={submit}
              size="large"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}