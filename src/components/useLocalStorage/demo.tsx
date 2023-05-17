import { component$, useStylesScoped$ } from '@builder.io/qwik';
import '../../global.css';
import { useLocalStorage } from './index';

export const Demo = component$(() => {
  useStylesScoped$(AppCSS);

  const count = useLocalStorage('count', 0);

  return (
    <div class="cont">
      <div class="count">{count.value}</div>
      <button onClick$={() => count.value++}>Inc</button>
      <button onClick$={() => count.value--}>Dec</button>
    </div>
  );
});

export const AppCSS = `
.cont {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
}

.count {
  font-size: 20px;
}

button {
  width: 90px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  background: var(--blue);
  border: 1px solid var(--gray);
  border-radius: 5px;
}
`;
