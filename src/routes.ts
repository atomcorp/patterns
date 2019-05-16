import {routesType} from './types';
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

const routes: routesType = {
  basic: {
    path: '/basic',
    name: 'Basic',
    component: Basic,
  },
  repeated: {
    path: '/repeated',
    name: 'Repeated',
    component: RepeatedPattern,
  },
  randomTiles: {
    path: 'random-tiles',
    name: 'Random tiles',
    component: RandomTiles,
  },
  elements: {
    path: '/elements',
    name: 'Elements (Broke)',
    component: ElementTiles,
  },
  defined: {
    path: '/defined',
    name: 'Defined',
    component: Defined,
  },
  colours: {
    path: '/colours',
    name: 'Colours',
    component: Colours,
  },
  chevrons: {
    path: '/chevrons',
    name: 'Chevrons',
    component: Chevrons,
  },
};

export default routes;
