// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useEffect } from 'react';
import { getTokenFromUrl } from './musonic';

function App() {

  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I HAVE A TOKEN  >>> ", token);
  }, [])

  return (
    <div className="app">
      {/* <h1>APP</h1> */}
      <Login />
    </div>
  );
}

export default App;
