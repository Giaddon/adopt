import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Pets from './Pets';
import Lost from './Lost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pets">
            <Pets />
          </Route>
          <Route path="*">
            <Lost />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
