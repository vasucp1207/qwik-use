import { useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";

type ValueType = string | number | boolean | object | any[];

export function useLocalStorage<T extends ValueType>(key: string, initialValue: T) {
  const store = useSignal(initialValue);

  useVisibleTask$(() => {
    try {
      const currentValue: string | null = localStorage.getItem(key);
      store.value = currentValue ? JSON.parse(currentValue) : initialValue;
    } catch (e) {
      console.error(`Error retrieving ${key} from localStorage`, e);
      store.value = initialValue;
    }
  })

  useTask$(({ track }) => {
    track(() => store.value);
    try {
      localStorage.setItem(key, JSON.stringify(store.value));
    } catch (e) {
      console.error(`Error storing ${key} in localStorage`, e);
    }
  })

  return store;
}