// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Admin />
      </div>
    </Router>
  );
};

export default App;
