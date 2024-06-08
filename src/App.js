
import React from 'react';
import Bookshelf from './Components/Bookshelf';
import Book from './Components/Book';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  </Router>
    </>
    
  );
}

export default App;

