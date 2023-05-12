import { component$, useSignal, useVisibleTask$, useStyles$ } from '@builder.io/qwik';
import '../../global.css';
import { resizable } from './index';

export const Demo = component$(() => {
  useStyles$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    if(ele.value) {
      resizable(ele.value as HTMLElement);
    }
  })

  return (
    <div class="drag" ref={ele}>
      resize me
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
  border: 2px solid var(--gray);
  background: var(--blue);
  color: white;
}
`;
