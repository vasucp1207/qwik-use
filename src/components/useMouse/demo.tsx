import { component$ } from '@builder.io/qwik';
import '../../global.css';
import { mousePos } from './index';

export const Demo = component$(() => {
  const { x, y } = mousePos();

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
});
