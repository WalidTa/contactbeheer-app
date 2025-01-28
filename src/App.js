import React from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import SearchBar from './Components/SearchBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactDetail from './Components/ContactDetails';

const App = () => {
  return (
    <Router>
    <div className="app-container">
      <header className="app-header">
        <h1>
        <Link to="/" className="link">Contactbeheer App</Link>
        </h1>
      </header>
      <main>
      <Routes>
        {/*Displays Search bar and Contacts  */}
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <Contacts />
                </>
              }
            />

            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
      </main>
    </div>
    </Router>
  );
};

export default App;
