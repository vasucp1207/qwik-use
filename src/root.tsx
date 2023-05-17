import { Demo } from './components/dragDiv/demo';
import { Demo as Demo1 } from './components/dragSet/demo';
import { Demo as Demo2 } from './components/keyStroke/demo';
import { Demo as Demo3 } from './components/parallax/demo';
import { Demo as Demo4 } from './components/pinch/demo';
import { Demo as Demo5 } from './components/resize/demo';
import { Demo as Demo6 } from './components/useFlip/demo';
import { Demo as Demo7 } from './components/useLocalStorage/demo';
import { Demo as Demo8 } from './components/useSessionStorage/demo';
import { Demo as Demo9 } from './components/useMouse/demo';
import './global.css';

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Demo />
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
        <Demo5 />
        <Demo6 />
        <Demo7 />
        <Demo8 />
        <Demo9 />
      </body>
    </>
  );
};
