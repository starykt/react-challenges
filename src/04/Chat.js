import { useState } from 'react';
import "./base.css";

export default function Chat({contact, message, dispatch}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Contato com ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button className='base-btn'
        onClick={() => {
          alert(`Enviando "${message}" para ${contact.email}`);
          dispatch({
            type: 'sent_message',
          });
        }}>
        Enviando para {contact.email}
      </button>
    </section>
  );
}
