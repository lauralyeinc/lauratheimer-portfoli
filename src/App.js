import React from 'react';
import './App.css';

import Navigation from "./components/Navigation";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer"; 

function App() {
  return (
    <div className="App">
      <div className="Navigaton-Area">
        <Navigation />
      </div>
      <div className="Main-Area">
        <AppRouter />
      </div>
      <div className="Footer-Area">
        <Footer />
      </div>
    </div>
  )
}

export default App;
