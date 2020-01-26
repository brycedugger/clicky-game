import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

class App extends Component {

  state = {
    score: 0,
    topScore: 0
  };

  //on App.js and not main to pass state props on Navbar
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
    }, () => {
      if (this.state.score >= this.state.topScore) {
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
      })
      alert("You won! Restarting game...");
    }
    else {
      this.setState({
        score: 0,
      })
      alert("You lost! Try again...");
    }
  };


  render() {
    // return (
    //   <React.Fragment>
    //     <Navbar
    //       // these are in App.js because child component does not
    //       // have access to the state
    //       score={this.state.score}
    //       topScore={this.state.topScore}
    //     />
    //     <Main
    //       score={this.state.score}
    //       topScore={this.state.topScore}
    //       setMessage={this.setMessage}
    //       incrementScore={this.incrementScore}
    //       resetScore={this.resetScore}
    //     />
    //   </React.Fragment>
    // );
  }
}

export default App;
