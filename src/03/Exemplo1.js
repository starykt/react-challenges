import { Link } from 'react-router-dom';
import "./base.css";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function ToolBar({ onPlayMovie, onUploadImage }) {
  return (
    <div className='container'>
    <Link to="/" className='btn-voltar'>Voltar</Link>
<div className="div-test">
      <button className="btn-play" onClick={onPlayMovie}>Play Movie</button>
      <button className="btn-play" onClick={onUploadImage}>Upload Image</button>
    </div>
    </div>
  );
}


export default function Exemplo1() {
  return (
    <div>
      <ToolBar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
    </div>
  );
}

