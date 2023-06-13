import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./base.css";

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`${message} ${to}!`);
    }, 5000);
  }

  return (
    <div className='container'>
      <Link to="/" className='btn-voltar'>Voltar</Link>
      <div className='div-test'>
        <form onSubmit={handleSubmit}>
          <label>
            To:{' '}
            <select
              value={to}
              onChange={e => setTo(e.target.value)}>
              <option value="Bruna">Bruna</option>
              <option value="Amanda">Amanda</option>
            </select>
          </label>
          <div className='centralizar'>
            <textarea
              placeholder="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <button className='btn-play' type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
