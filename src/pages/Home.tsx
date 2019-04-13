import React from 'react';
import {Link} from 'react-router-dom';

import routes from '../routes';

const Home = () => (
  <section>
    <h1>Anni</h1>
    <ul>
      {Object.keys(routes).map((key) => {
        const route = routes[key];
        return (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Home;
