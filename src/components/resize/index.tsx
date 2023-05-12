export function resizable(node: HTMLElement): void {
  let down: boolean = false;
  node.style.position = 'relative';

  const initialHeight: number = node.offsetHeight;
  const initialWidth: number = node.offsetWidth;

  const right: HTMLElement = document.createElement('div');

  right.style.width = '10px';
  right.style.height = '10px';
  right.style.background = "transparent";
  right.style.position = 'absolute';
  right.style.right = '0';
  right.style.bottom = '0';
  right.style.cursor = 'se-resize';

  const startPos: { x: number, y: number } = { x: 0, y: 0 };

  node.appendChild(right);

  right.addEventListener('mouseover', () => {
    right.style.background = "blue";
  });

  right.addEventListener('mouseleave', () => {
    right.style.background = "transparent";
  });

  right.addEventListener('mousedown', (e: MouseEvent) => {
    down = true;
    startPos.x = e.clientX;
    startPos.y = e.clientY;
  });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (down) {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;

      if (node.offsetWidth + dx >= initialWidth) {
        node.style.width = `${node.offsetWidth + dx}px`;
        startPos.x = e.clientX;
      }
      if (node.offsetHeight + dy >= initialHeight) {
        node.style.height = `${node.offsetHeight + dy}px`;
        startPos.y = e.clientY;
      }
    }
  });
  document.addEventListener('mouseup', () => {
    down = false;
  });
}