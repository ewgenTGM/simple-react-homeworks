import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';
import HW1 from '../h1/HW1';
import HW2 from '../h2/HW2';
import HW4 from '../h4/HW4';
import HW3 from '../h3/HW3';

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  HW1: '/hw1',
  HW2: '/hw2',
  HW3: '/hw3',
  HW4: '/hw4'
};

function Routes() {
  return (
      <div>
        <Switch>
          <Route
              path={ '/' }
              exact
              render={ () => <Redirect to={ PATH.PRE_JUNIOR }/> }/>
          <Route
              path={ PATH.PRE_JUNIOR }
              render={ () => <PreJunior/> }/>
          <Route
              path={ PATH.HW1 }
              render={ () => <HW1/> }/>
          <Route
              path={ PATH.HW2 }
              render={ () => <HW2/> }/>
          <Route
              path={ PATH.HW3 }
              render={ () => <HW3/> }/>
          <Route
              path={ PATH.HW4 }
              render={ () => <HW4/> }/>
          <Route render={ () => <Error404/> }/>
        </Switch>
      </div>
  );
}

export default Routes;
