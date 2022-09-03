import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title = "The Versatile Corner" 
      aboutText = "About Us" socialMedia = "Social Media" 
      contactUs="ContactDetails"/>

      <div className="container my-3">
        <Textform heading = "Enter the text to analyze"/>
      </div>

    </>
  );
}

export default App;
