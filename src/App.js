import React from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import SearchBar from './Components/SearchBar';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Contactbeheer App</h1>
      </header>
      <main>
       <SearchBar />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
