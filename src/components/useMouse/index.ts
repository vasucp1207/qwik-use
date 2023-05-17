/* eslint-disable qwik/use-method-usage */
import { $, useSignal, useOnDocument } from "@builder.io/qwik";

export function mousePos() {
  const x_coor = useSignal(0);
  const y_coor = useSignal(0);

  useOnDocument(
    'mousemove',
    $((event) => {
      const { x, y } = event as MouseEvent;
      x_coor.value = x;
      y_coor.value = y;
    })
  )  

  return {
    x: x_coor.value,
    y: y_coor.value
  }
}