import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Router>
        <nav>
          <Link to="/" id="link">
            Home
          </Link>
          <Link to="/store" id="link">
            Store
          </Link>
          <Link to="/ideas" id="link">
            Ideas
          </Link>
          <Link to="/about" id="link">
            About
          </Link>
        </nav>
      </Router>
    </div>
  );
}
