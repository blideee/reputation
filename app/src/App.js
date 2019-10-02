import React from 'react';
import {Helmet} from "react-helmet";
import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>App</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/users"
        >
          Learn React
        </Link>
      </header>
    </div>
  );
}

export default App;
