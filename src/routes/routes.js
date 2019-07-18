import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Containers/home';
import SingleMovie from '../Containers/singleMovie';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/single/:id" component={props => <SingleMovie {...props} />} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
