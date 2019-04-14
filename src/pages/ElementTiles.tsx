import React from 'react';
import {Board, Page} from '../components';

const Tile = ({color}: {color: string}) => (
  <div style={{width: '24px', height: '24px', background: color}} />
);

const RedTile = <Tile color="red" />;
const BlueTile = <Tile color="blue" />;

const ElementTiles = () => {
  return (
    <Page title="Element titles">
      <Board matrix={[[RedTile], [BlueTile]]} />
    </Page>
  );
};

export default ElementTiles;
