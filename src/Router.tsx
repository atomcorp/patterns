import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Basic, Home, RepeatedPattern, RandomTiles} from './pages';

const Router = () => (
  <Switch>
    <Route path="/random-tiles" component={RandomTiles} />
    <Route path="/repeated" component={RepeatedPattern} />
    <Route path="/basic" component={Basic} />
    <Route component={Home} />
  </Switch>
);

export default Router;
