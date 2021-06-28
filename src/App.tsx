import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Pets from './components/Pets';
import Lost from './components/Lost';

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
