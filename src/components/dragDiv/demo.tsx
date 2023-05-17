import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';
import { draggable } from './index';

export const Demo = component$(() => {
  useStylesScoped$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    draggable(ele.value as HTMLElement);
  })

  return (
    <div class="drag" ref={ele}>
      drag me
    </div>
  );
});

export const AppCSS = `
.drag {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  width: 100px;
  height: 100px;
  border: 2px solid var(--gray);
  background: var(--blue);
  color: white;
  border-radius: 10px;
}
`;
