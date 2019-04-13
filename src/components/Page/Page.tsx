import React from 'react';
import {Link} from 'react-router-dom';

import css from './Page.module.css';

type PageType = {
  title: string;
};

const Page: React.FC<PageType> = (props) => (
  <section className={css.container}>
    <Link to="/">Back</Link>
    <h1>{props.title}</h1>
    {props.children}
  </section>
);

export default Page;
