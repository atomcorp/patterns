import React from 'react';
import {Link} from 'react-router-dom';

type PageType = {
  title: string;
};

const Page: React.FC<PageType> = (props) => (
  <section>
    <Link to="/">Back</Link>
    <h1>{props.title}</h1>
    {props.children}
  </section>
);

export default Page;
