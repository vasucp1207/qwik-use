import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';
import { keyStroke } from './index';

export const Demo = component$(() => {
  useStylesScoped$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    keyStroke(ele.value as HTMLElement, 50);
  })

  return (
    <div class='cont'>
      <div class="drag" ref={ele}></div>
    </div>
  );
});

export const AppCSS = `
.cont {
  position: relative;
}

.drag {
  width: 50px;
  height: 50px;
  background: var(--blue);
  border-radius: 100px;
}
`;
