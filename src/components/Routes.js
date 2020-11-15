import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import DogDetails from './DogDetails';
import AddDog from './AddDog';
import EditDog from './EditDog';
const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add-dog">
          <AddDog />
        </Route>

        <Route exact path="/:name">
          <DogDetails />
        </Route>
        <Route exact path="/:name/edit">
          <EditDog />
        </Route>
      </Switch>
    </main>
  );
};

export default Routes;
