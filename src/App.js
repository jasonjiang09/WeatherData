
import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import California from './California';
import Texas from './Texas'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';


function App() {

  return(
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/california" exact component={California} />
          <Route path="/texas" exact component={Texas} />
          <Route path="/state/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
};

//Switch picks first route that works

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;