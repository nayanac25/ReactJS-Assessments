import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2>🎓 Student Course Portal</h2>
        <Link to="/" className="text">Home</Link>
      </nav>
    );
  }
}

export default Navbar;