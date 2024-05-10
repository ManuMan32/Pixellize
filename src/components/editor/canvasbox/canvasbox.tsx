import './canvasbox.css';
import { useState, useEffect } from 'react';
interface CanvasBox { rect: DOMRect | undefined, x: number, y: number }
interface CanvasMovement { x: number, y: number }
const canvasBox: CanvasBox = {
  rect: undefined,
  x: 0,
  y: 0,
}
const CanvasBox: React.FC = () => {
  const [canvasMovement, setCanvasMovement] = useState<CanvasMovement>({ x: 0, y: 0 });
  useEffect(() => {
    const cb = document.querySelector('.editorCanvas');
    canvasBox.rect = cb?.getBoundingClientRect();
    canvasBox.x = canvasBox.rect!.x;
    canvasBox.y = canvasBox.rect!.y;
  }, [])
  function handleMouseMove(e: any) {
    if (e.buttons === 4) {
      setCanvasMovement({
        x: canvasMovement.x + e.movementX,
        y: canvasMovement.y + e.movementY
      });
    }
  }
  return (
    <div className='editorBar editorCanvas' onMouseMove={handleMouseMove}>
      <canvas id='canvas' style={{
        left: `${canvasMovement.x}px`,
        top: `${canvasMovement.y}px`
      }}></canvas>
    </div>
  )
}
export default CanvasBox;