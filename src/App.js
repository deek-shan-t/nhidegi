import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Topic from './components/topic';
import Intro from './components/intro';
import Carousel from './components/carousel';
import Infobar from './components/infobar';

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar/>
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="carousel_body">
        <Intro/>
        <Carousel/>
        </div>
        <Infobar/>
        <Topic/>
      </header>
    </div>
      </BrowserRouter>
      
    </React.StrictMode>  
  );
}
