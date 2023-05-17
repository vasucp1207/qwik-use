import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';
import { resizable } from './index';

export const Demo = component$(() => {
  useStylesScoped$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    resizable(ele.value as HTMLElement);
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
  background: var(--blue);
  color: white;
}
`;
