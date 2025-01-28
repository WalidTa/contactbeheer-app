import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactContext } from '../Context/ContactContext';
import SearchBar from '../Components/Search Bar/SearchBar';
import Contacts from '../Components/Contact List/Contacts';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup(); // Cleans up after each test
});

test('filters contacts based on search input', () => {
  let searchContactState = '';
  const mockContacts = [
    { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '0612112112' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '0612020202' },
  ];
  const mockSetSearchContact = (newSearch) => {
    searchContactState = newSearch;
    rerender(
      <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ContactContext.Provider
          value={{
            contacts: mockContacts,
            SearchContact: searchContactState,
            setSearchContact: mockSetSearchContact,
          }}
        >
          <SearchBar />
          <Contacts />
        </ContactContext.Provider>
      </MemoryRouter>
    );
  };

  const { rerender } = render(
    <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ContactContext.Provider
        value={{
          contacts: mockContacts,
          SearchContact: searchContactState,
          setSearchContact: mockSetSearchContact,
        }}
      >
        <SearchBar />
        <Contacts />
      </ContactContext.Provider>
    </MemoryRouter>
  );

  // Simulate typing "Jane" into the search bar
  const input = screen.getByPlaceholderText('Search for contacts');
  fireEvent.change(input, { target: { value: 'Jane' } });

  // Assertions
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
});
