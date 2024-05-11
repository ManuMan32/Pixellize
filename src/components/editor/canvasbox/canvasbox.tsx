import './canvasbox.css';
import { useState, useEffect } from 'react';
interface CanvasBox { rect: DOMRect | undefined, x: number, y: number }
interface Coordinates { x: number, y: number }
const canvasBox: CanvasBox = {
  rect: undefined,
  x: 0,
  y: 0,
}
const CanvasBox: React.FC = () => {
  const [canvasSize, setCanvasSize] = useState<Coordinates>({ x: 64, y: 64 });
  const [pixelSize, setPixelSize] = useState<number>(6);
  const [canvasMovement, setCanvasMovement] = useState<Coordinates>({ x: 0, y: 0 });
  useEffect(() => {
    const cb = document.querySelector('.editorCanvas');
    canvasBox.rect = cb?.getBoundingClientRect();
    canvasBox.x = canvasBox.rect!.x;
    canvasBox.y = canvasBox.rect!.y;
  }, []);
  useEffect(() => {
    // Canvas grid
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = canvasSize.x * pixelSize;
    canvas.height = canvasSize.y * pixelSize;
    const ctx: CanvasRenderingContext2D = canvas!.getContext('2d') as CanvasRenderingContext2D;
    for (let i = 0; i < canvasSize.x * pixelSize; i += pixelSize * 2) {
      ctx.fillRect(i, 0, 1, canvasSize.y * pixelSize);
    }
    for (let j = 0; j < canvasSize.y * pixelSize; j += pixelSize * 2) {
      ctx.fillRect(0, j, canvasSize.x * pixelSize, 1);
    }
  }, [pixelSize]);
  function handleMouseMove(e: any) {
    if (e.buttons === 4) {
      setCanvasMovement({
        x: canvasMovement.x + e.movementX,
        y: canvasMovement.y + e.movementY
      });
    }
  }
  function handleWheel(e: any) {
    const movement = (e.deltaY / 100) * -1;
    const newPixelSize = pixelSize + movement;
    if (newPixelSize >= 1 && newPixelSize <= 30)
    setPixelSize(pixelSize + movement);
  }
  return (
    <div className='editorBar editorCanvas' onMouseMove={handleMouseMove} onWheel={handleWheel}>
      <canvas id='canvas' style={{
        width: `${canvasSize.x * pixelSize}px`,
        height: `${canvasSize.y * pixelSize}px`,
        left: `${canvasMovement.x}px`,
        top: `${canvasMovement.y}px`
      }}></canvas>
    </div>
  )
}
export default CanvasBox;