import React from 'react';
import css from './Chevrons.module.css';

type ChevronType = {
  color: string;
};

const rotations = ['zero', 'ninety', 'one-eighty', 'two-seventy'];
const rotation = () => rotations[Math.floor(Math.random() * 4)];
const invertColour = (color: string) => (color === 'red' ? 'blue' : 'red');
const niceColour = (color: string) => (color === 'red' ? '#e23014' : '#3e5cd6');

const Chevron = (props: ChevronType) => {
  return (
    <div style={{background: niceColour(invertColour(props.color))}}>
      <div
        className={`${css.shape} ${css.chevron} ${css[rotation()]}`}
        style={{
          background: niceColour(props.color),
        }}
      />
    </div>
  );
};

export default Chevron;
