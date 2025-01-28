import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactContext } from '../Context/ContactContext';
import Contacts from '../Components/Contacts';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup(); // Cleans up after each test
});

test('renders the contact list', () => {
  const mockContacts = [
    { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '0612112112' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '0612020202' },
  ];
  const mockSearchContact = '';

  render(
    <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ContactContext.Provider value={{ contacts: mockContacts, SearchContact: mockSearchContact }}>
        <Contacts />
      </ContactContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});
