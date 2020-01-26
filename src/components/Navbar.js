import React from "react";
import "../App.css";

function Navbar (props) {
    return (
        <nav className="navbar fixed top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Clicky Game
            </a>
            <ul className="navbar-nav float-right">
                <li className="nav-item">
                    Score: {props.score} | Top Score: {props.topScore}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;