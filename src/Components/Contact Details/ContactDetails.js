import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactContext } from '../../Context/ContactContext';
import Contacts from '../Contact List/Contacts';
import './ContactDetails.css';

const ContactDetail = () => {
    const { id } = useParams();
    const { contacts } = useContext(ContactContext);
    const navigate = useNavigate();

    //find contact by ID
    const contact = contacts.find((contact) => contact.id === parseInt(id));

    //error message if not found
    if (!contact) {
        return <p> Error, contact not found</p>;
    }

    //display details
    return (
        <div className="contact-detail">
          <h1>{contact.firstName} {contact.lastName}</h1>
          <p>First name: {contact.firstName}</p>
          <p>Last name: {contact.lastName}</p>
          <p>Phone: {contact.phoneNumber}</p>
          <p>Email: {contact.email}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
      );
    };

    export default ContactDetail;