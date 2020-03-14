import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <nav>
      <h2>Weather Report for California and Texas</h2>
      <ui className="nav-links">
        <Link to="/about">
          <Button variant="primary" size="lg">
            About
          </Button>
        </Link>
        <Link to="/california">
          <Button variant="primary" size="lg">
            California
          </Button>
        </Link>
        <Link to="/texas">
          <Button variant="primary" size="lg">
            Texas
          </Button>
        </Link>
      </ui>
    </nav>
  );
}

//coment

export default Nav;
