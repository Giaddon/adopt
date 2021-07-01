import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Page from './views/page/Page';
import PetsController from './components/PetsController';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Page 
              title="Shellside Animal Shelter + Adoption" 
              text={["The Shellside Animal Shelter has been proudly serving the community's animals and animal lovers since our foundation in 1972. Here you can learn more about the Shelter, see the animals in our care, and perhaps find a new companion for your home.", "Welcome."]} 
            />
          </Route>
          <Route exact path="/pets">
            <Page 
              title="Pets"
              text={["Pets arrive in our care for a variety of reasons, but they are here for the same purpose: to find a loving, caring, and supportive home."]} 
            />
            <PetsController />
          </Route>
          <Route exact path="/add">
            <Page 
              title="Add a Pet"
              text={["We are always ready to welcome a new animal friend, no questions asked.", "If you have a pet you'd like to give to the shelter, tell us about him or her in the form below."]}
            />
          </Route>
          <Route path="*">
          <Page 
              title="Lost" 
              text={["Getting lost isn't a failure. It's an opportunity to reconsider your path, or find a new one altogether. Take a moment to enjoy the sensation.", "When you're ready, use the navigation links to renew your journey."]} 
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
