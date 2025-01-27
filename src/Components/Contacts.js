import React, { useContext } from 'react';
import { ContactContext } from '../Context/ContactContext';
import './Contacts.css';

  const Contacts = () => {
    const { contacts, SearchContact } = useContext(ContactContext);

    const filteredContacts = contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName}`
    .toLowerCase()
    .includes(SearchContact.toLowerCase())
);

    return (
      <div className="contact-list">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="contact-row">
            <div className="contact-logo">
              <img
                src="logo1.png" 
                alt="Contact"
              />
            </div>
            <div className="contact-details">
              <span className="contact-name">{contact.firstName} {contact.lastName}</span>
              <span className="contact-phone">{contact.phoneNumber}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Contacts;