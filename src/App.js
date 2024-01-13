import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/head";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <React.StrictMode>
    <div></div>
      <BrowserRouter>
        <Navbar/>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
      </BrowserRouter>
      
    </React.StrictMode>  
  );
}
