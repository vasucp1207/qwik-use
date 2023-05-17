import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';
import { pinch } from './index';

export const Demo = component$(() => {
  useStylesScoped$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    pinch(ele.value as HTMLElement);
  })

  return (
    <div class="drag" ref={ele}>
      pinch me
    </div>
  );
});

export const AppCSS = `
.drag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  cursor: grab;
  border: 2px solid var(--gray);
  background: var(--blue);
  color: white;
  border-radius: 10px;
}
`;
