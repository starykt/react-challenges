import { useState } from 'react';
import "./base.css";
import { Link } from 'react-router-dom';

let initialShapes = [
  { id: 0, type: 'circle', x: window.innerWidth / 2 - 50, y: 300 },
  { id: 1, type: 'square', x: window.innerWidth / 2, y: 300 },
  { id: 2, type: 'circle', x: window.innerWidth / 2 + 50, y: 300 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <div className='container'>
    <div className='div-test'>
      <button className='btn-play' onClick={handleClick}>
        Move circles down!
      </button>
      <div className='centralizar'>
      {shapes.map(shape => (
        <div 
        key={shape.id}
        style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
          shape.type === 'circle'
          ? '50%' : '',
          width: 20,
          height: 20,
        }} />
        ))}
      </div>
    </div>
      <Link to="/" className='btn-voltar'>Voltar</Link>
    </div>
  );
}
