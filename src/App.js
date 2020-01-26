import React, { Component } from "react";
// import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {

  state = {
    message: "Pick a Card",
    score: 0,
    topScore: 0
  };

  //on App.js and not main to pass state props on Navbar
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
      message: "Correct!"
    }, () => {
      if (this.setTopScore >= this.state.topscore) {
        this.setTopScore(this.state.score);
      }
    });
  };

  setTopScore = (score) => {
    this.setState({ topScore: score });
  }


  //on App.js and not main to pass state props on Navbar
  resetScore = () => {
    if (this.state.score === 12) {
      this.setState({
        score: 0,
        message: "You won! Restarting game..."
      })
    }
    else {
      this.setState({
        score: 0,
        message: "You lost! Try again..."
      })
    }
  };


  render() {
    return (
      <React.Fragment>
        <Navbar
          // these are in App.js because child component does not
          // have access to the state
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
}

export default App;
