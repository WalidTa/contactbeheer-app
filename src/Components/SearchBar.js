import React, { use, useContext } from 'react';
import { ContactContext } from '../Context/ContactContext';
import './SearchBar.css'

const SearchBar = () => {
    const { SearchContact, setSearchContact } = useContext(ContactContext);

    return(
        <div className='search-bar'>
            <input //input field
            type='text'
            placeholder='Search for contacts'
            value={SearchContact}
            //functions as the text is typed
            onChange={(e) => setSearchContact(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;