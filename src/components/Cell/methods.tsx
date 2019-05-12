import React from 'react';
import Cell from './Cell';

export const returnCell = (style: number) => {
  switch (style) {
    case 1:
      return <Cell direction="topLeft" color="red" />;
    case 2:
      return <Cell direction="topRight" color="red" />;
    case 3:
      return <Cell direction="bottomRight" color="blue" />;
    case 4:
      return <Cell direction="bottomLeft" color="blue" />;
    default:
      return <Cell direction="blank" color="white" />;
  }
};

export const returnColourCell = (style: string) => {
  switch (style) {
    // top left - light
    case 'tll':
      return <Cell direction="topLeft" color="#bcc2b4" />;
    case 'trl':
      return <Cell direction="topRight" color="#bcc2b4" />;
    case 'brl':
      return <Cell direction="bottomRight" color="#bcc2b4" />;
    case 'bll':
      return <Cell direction="bottomLeft" color="#bcc2b4" />;
    // top left - dark
    case 'tld':
      return <Cell direction="topLeft" color="#7f9794" />;
    case 'trd':
      return <Cell direction="topRight" color="#7f9794" />;
    case 'brd':
      return <Cell direction="bottomRight" color="#7f9794" />;
    case 'bld':
      return <Cell direction="bottomLeft" color="#7f9794" />;
    default:
      return <Cell direction="blank" color="transparent" />;
  }
};
