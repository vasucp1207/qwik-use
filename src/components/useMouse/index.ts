/* eslint-disable qwik/use-method-usage */
import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export function mousePos() {
  const x = useSignal(0);
  const y = useSignal(0);

  useVisibleTask$(() => {
    document.addEventListener('mousemove', (e) => {
      x.value = e.clientX;
      y.value = e.clientY;
    })
  })


  return {
    x: x.value,
    y: y.value
  }
}