import React from 'react';
import './App.css';
import Contacts from './Components/Contacts';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Contactbeheer App</h1>
      </header>
      <main>
        <Contacts />
      </main>
    </div>
  );
};

export default App;
