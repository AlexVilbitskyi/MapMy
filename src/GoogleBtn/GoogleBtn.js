import React from 'react'
import GoogleLogin from 'react-google-login'
import { useAuth } from "../context/auth"

const CLIENT_ID = '300952943595-7ktvmo6cj9s7d40258sh2bohj76d6fn7.apps.googleusercontent.com'

function GoogleBtn() {
    const { setAuthTokens } = useAuth()
  
    function login (response) {
        if(response.accessToken){
            localStorage.setItem("tokens", JSON.stringify(response.accessToken))
            setAuthTokens(response.accessToken)
        }
    }

    function handleLoginFailure () {
        alert('Failed to log in')
    }

    return (
        <GoogleLogin
            clientId={ CLIENT_ID }
            buttonText='Sign in with Google'
            onSuccess={ login }
            onFailure={ handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
        />
    )
}

export default GoogleBtn