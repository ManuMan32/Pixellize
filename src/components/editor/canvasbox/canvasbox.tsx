import { TOOLS } from '../../../model';
import { useEditorContext } from '../editorContext';
import './canvasbox.css';
import { useState, useEffect } from 'react';
interface CanvasBox { rect: DOMRect | undefined, x: number, y: number }
interface Coordinates { x: number, y: number }
interface Colors { primary: string, secondary: string }
const canvasBox: CanvasBox = {
  rect: undefined,
  x: 0,
  y: 0,
}
const CanvasBox: React.FC = () => {
  const [canvasSize] = useState<Coordinates>({ x: 64, y: 64 });
  const [pixelSize, setPixelSize] = useState<number>(6);
  const [canvasMovement, setCanvasMovement] = useState<Coordinates>({ x: 0, y: 0 });
  const [colors, setColors] = useState<Colors>({ primary: '#f00', secondary: '#0f0'});
  const { tool } = useEditorContext();
  useEffect(() => {
    const cb = document.querySelector('.editorCanvas');
    canvasBox.rect = cb?.getBoundingClientRect();
    canvasBox.x = canvasBox.rect!.x;
    canvasBox.y = canvasBox.rect!.y;
  }, []);
  useEffect(() => {
    // Canvas grid
    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas!.getContext('2d') as CanvasRenderingContext2D;
    const imageData = canvas.toDataURL('image/png');
    const image = new Image;
    image.src = imageData;
    image.onload = () => {
      canvas.width = canvasSize.x * pixelSize;
      canvas.height = canvasSize.y * pixelSize;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    const canvasMask: HTMLCanvasElement = document.getElementById('canvasMask') as HTMLCanvasElement;
    const ctxMask: CanvasRenderingContext2D = canvasMask!.getContext('2d') as CanvasRenderingContext2D;
    canvasMask.width = canvasSize.x * pixelSize;
    canvasMask.height = canvasSize.y * pixelSize;
    if (pixelSize != 1) {
      // Draw Canvas Grid
      for (let i = 0; i < canvasSize.x * pixelSize; i += pixelSize) {
        ctxMask.fillRect(i, 0, 1, canvasSize.y * pixelSize);
      }
      for (let j = 0; j < canvasSize.y * pixelSize; j += pixelSize) {
        ctxMask.fillRect(0, j, canvasSize.x * pixelSize, 1);
      }
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
    if (newPixelSize >= 1 && newPixelSize <= 40)
      setPixelSize(pixelSize + movement);
  }
  // Drawing functions
  let drawing = false;
  function drawStart(e: any) {
    drawing = true;
    draw(e);
  }
  function draw(e: any) {
    if (drawing && (e.buttons === 1 || e.buttons === 2)) {
      const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
      const ctx: CanvasRenderingContext2D = canvas!.getContext('2d') as CanvasRenderingContext2D;
      const colorPrimary: HTMLInputElement = document.querySelector('.colorPrimary')!;
      const colorSecondary: HTMLInputElement = document.querySelector('.colorSecondary')!;
      ctx.fillStyle = (e.buttons === 1) ? colorPrimary.value : colorSecondary.value;
      const canvasRect = canvas.getBoundingClientRect();
      const positionX = e.clientX - canvasRect.x;
      const positionY = e.clientY - canvasRect.y;
      const offsetX = positionX % pixelSize;
      const offsetY = positionY % pixelSize;
      if (tool == TOOLS.ERASER) ctx.fillStyle = 'white'
      ctx.fillRect(positionX - offsetX, positionY - offsetY, pixelSize, pixelSize);
    }
  }
  function drawEnd(e: any) {
    drawing = false;
  }
  return (
    <div className='editorBar editorCanvas' onMouseMove={handleMouseMove} onWheel={handleWheel}>
      <div className='canvasBox' style={{
        width: `${canvasSize.x * pixelSize}px`,
        height: `${canvasSize.y * pixelSize}px`,
        left: `${canvasMovement.x}px`,
        top: `${canvasMovement.y}px`
      }}>
        <canvas id='canvasMask' onMouseDown={drawStart} onMouseMove={draw} onMouseUp={drawEnd} onContextMenu={(e: any) => e.preventDefault()}></canvas>
        <canvas id='canvas' style={{
          width: `${canvasSize.x * pixelSize}px`,
          height: `${canvasSize.y * pixelSize}px`
        }}>
        </canvas>
        
      </div>
    </div>
  )
}
export default CanvasBox;