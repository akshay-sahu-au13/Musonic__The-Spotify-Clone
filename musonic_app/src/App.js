// import logo from './logo.svg';
// install spotify web api: npm install spotify-web-api-js

import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './musonic';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log("I HAVE A TOKEN 👉👉 >>> ", hash);
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("👨", user);
      })
    }

    

  }, [])

  

  return (
    <div className="app">
      {
        token ?
          (<h1>Logged in to spotify</h1>)
          : (
            <Login />
          )
      }
      
    </div>
  );
}

export default App;
