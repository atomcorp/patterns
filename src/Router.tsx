import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
  Basic,
  Home,
  RepeatedPattern,
  RandomTiles,
  ElementTiles,
  Defined,
  Colours,
  Chevrons,
} from './pages';
import routes from './routes';

const routerRoutes = Object.keys(routes).map((key, i) => (
  <Route key={i} component={routes[key].component} path={routes[key].path} />
));

const Router = () => (
  <Switch>
    <Route path="/chevrons" component={Chevrons} />
    <Route path="/defined" component={Defined} />
    <Route path="/colours" component={Colours} />
    <Route path="/elements" component={ElementTiles} />
    <Route path="/random-tiles" component={RandomTiles} />
    <Route path="/repeated" component={RepeatedPattern} />
    <Route path="/basic" component={Basic} />
    <Route component={Home} />
  </Switch>
);

export default Router;
