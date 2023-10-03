import React from "react";
import Logo from './logo.svg';
import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/head";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <React.StrictMode>
    <div></div>
      {/* <BrowserRouter>
        <Navbar style={{shadow: "none"}}/>
      </BrowserRouter> */}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <h1>Guys lets take selfie</h1> */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reac
        </a> */}
      </header>
    </div>
    </React.StrictMode>  
  );
}
