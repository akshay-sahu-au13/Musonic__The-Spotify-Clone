import React from 'react';
import './Login.css';
import { loginUrl } from './musonic';
// https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg

function Login() {
    return (
        <div className="login">

            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"/>
            {/* Spotify Logo */}
            {/* <button>Login with SPOTIFY</button> */}
            <a href={loginUrl}>Login with SPOTIFY</a>
        </div>
    )
}

export default Login;
