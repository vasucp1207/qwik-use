import { component$, useSignal, useVisibleTask$, useStyles$ } from '@builder.io/qwik';
import '../../global.css';
import { keyStroke } from './index';

export const Demo = component$(() => {
  useStyles$(AppCSS);

  const ele = useSignal<Element>();

  useVisibleTask$(() => {
    if(ele.value) {
      keyStroke(ele.value as HTMLElement, 50);
    }
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
  margin-left: 300px;
  margin-top: 300px;
}

.drag {
  width: 50px;
  height: 50px;
  background: var(--blue);
  border-radius: 100px;
}
`;
