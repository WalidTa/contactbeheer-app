import React, { createContext, useState } from 'react';

// Create the context
export const ContactContext = createContext();

// Context provider component
export const ContactProvider = ({ children }) => {
  const [contacts] = useState([
    { id: 1, firstName: "John", lastName: "Doe", phoneNumber: "0612112112", email: "john@doe.com" },
    { id: 2, firstName: "Jane", lastName: "Doe", phoneNumber: "0612020202", email: "jane@doe.com" },
    { id: 3, firstName: "Cristiano", lastName: "Ronaldo", phoneNumber: "0612121212", email: "cristiano@doe.com" },
    { id: 4, firstName: "Lionel", lastName: "Messi", phoneNumber: "0612122222", email: "lionel@doe.com" },
    { id: 5, firstName: "Billy", lastName: "Bob", phoneNumber: "0612145678", email: "billy@doe.com" },
    { id: 6, firstName: "Willem", lastName: "Alexander", phoneNumber: "0698761212", email: "willem@doe.com" },
    { id: 7, firstName: "Test", lastName: "Tester", phoneNumber: "0612345612", email: "test@doe.com" },
    { id: 8, firstName: "Contact", lastName: "Een", phoneNumber: "0612456212", email: "contact1@doe.com" },
    { id: 9, firstName: "Contact", lastName: "Twee", phoneNumber: "06121211232", email: "contact2@doe.com" },
    { id: 10, firstName: "Walid", lastName: "Tanouyat", phoneNumber: "0640878609", email: "walid@doe.com" },
  ]);

  const [SearchContact, setSearchContact] = useState('');

  return (
    <ContactContext.Provider value={{ contacts, SearchContact, setSearchContact }}>
      {children}
    </ContactContext.Provider>
  );
};
