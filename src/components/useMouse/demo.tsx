import { component$, useStyles$ } from '@builder.io/qwik';
import '../../global.css';
import { mousePos } from './index';

export const Demo = component$(() => {
  useStyles$(AppCSS);

  const { x, y } = mousePos();

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
});

export const AppCSS = `

`;
