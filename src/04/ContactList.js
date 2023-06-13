import "./base.css";
export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list">
        
          {contacts.map((contact) => (
            <li className="decoration" key={contact.id}>
              <button className="contact-button"
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
  