import { component$, useSignal, useVisibleTask$, useStyles$ } from '@builder.io/qwik';
import '../../global.css';
import { parallax } from './index';

export const Demo = component$(() => {
  useStyles$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    if(ele.value) {
      parallax(ele.value as HTMLElement);
    }
  })

  return (
    <div class="drag" ref={ele}>
      parallax
    </div>
  );
});

export const AppCSS = `
.drag {
  position: absolute;
  left: 45%;
  top: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  cursor: grab;
  border: 2px solid var(--gray);
  background: var(--blue);
  color: white;
  border-radius: 10px;
}
`;
