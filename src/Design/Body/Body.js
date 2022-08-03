import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Ideas from "./Ideas/Ideas";
import Store from "./Store/Store";

export default function Body() {
  return (
    <div style={{ padding: "0px 130px" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/ideas" element={<Ideas />} />
        </Routes>
      </Router>
    </div>
  );
}
