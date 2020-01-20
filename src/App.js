import React, { Component } from 'react';
import React from 'react';
import './App.css';

import Navbar from "./components/Containers/Navbar";
import Main from "./components/Containers/Main";
import Footer from "./components/Containers/Footer";

function App() {

  return (
    <React.Fragment>
      <Navbar
        message={this.state.message}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <Main 
        score={this.state.score}
        topScore={this.state.topScore}
        setMessage={this.setMessage}
        incrementScore={this.incrementScore}
        resetScore={this.resetScore}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
