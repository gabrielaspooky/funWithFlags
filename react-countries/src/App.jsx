// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './components/CountryModal';
import DarkMode from './components/DarkMode';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
        <DarkMode />
      </div>
    </Router>
  );
}

export default App;
