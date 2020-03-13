import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

function Nav() {
  return(
    <nav>
        <h2>Weather Forcast</h2>
        <ui className="nav-links">
            <Link to='/about'>
            <Button variant="primary" size="lg">
              About
            </Button>
            </Link>
            <Link to='/shop'>
              <Button variant="primary" size="lg">
                Shop
              </Button>
            </Link>
        </ui>
    </nav>
  );
};


export default Nav;