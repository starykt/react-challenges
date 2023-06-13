export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section classNameName="contact-list">
        
          {contacts.map((contact) => (
            <li classNameName="decoration" key={contact.id}>
              <button classNameName="botao-afastado"
                onClick={() => {
                  dispatch({
                    type: 'changed_selection',
                    contactId: contact.id,
                  });
                }}>
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        
      </section>
    );
  }
  