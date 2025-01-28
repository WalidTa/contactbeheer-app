import React, { useContext } from 'react';
import { ContactContext } from '../../Context/ContactContext';
import './Contacts.css';
import { Link } from 'react-router-dom';

  const Contacts = () => {
    const { contacts, SearchContact } = useContext(ContactContext);

    //filter functionality
    const filteredContacts = contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName}`
    .toLowerCase()
    .includes(SearchContact.toLowerCase())
);

    //display the filtered list
    return (
      <div className="contact-list">
        {filteredContacts.map((contact) => (
          <Link
          to={`/contact/${contact.id}`} // Navigate to the details page for the contact
          key={contact.id}
          className="contact-row"
        >
            <div className="contact-logo">
              <img
                src="logo1.png" 
                alt="Contact"
              />
            </div>
            {/* compact view of contact */}
            <div className="contact-details"> 
              <span className="contact-name">{contact.firstName} {contact.lastName}</span>
              <span className="contact-phone">{contact.phoneNumber}</span>
            </div>
            </Link>
        ))}
      </div>
    );
  };
  
export default Contacts;