import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Basic, Home} from './pages';

const Router = () => (
  <Switch>
    <Route path="/basic" component={Basic} />
    <Route component={Home} />
  </Switch>
);

export default Router;
