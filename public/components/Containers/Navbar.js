import React, { Component } from "react";
import "./style.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    Clicky Game
                </a>
                <ul className="navbar-nav mr-auto">
                    <li class="message">{this.props.message}</li>
                </ul>
                <ul className="navbar-nav float-right">
                    <li className="nav-item">
                        Score: {this.props.score} | Top Score: {this.props.topScore}
                    </li>
                </ul>
            </nav>
        );
    }
}