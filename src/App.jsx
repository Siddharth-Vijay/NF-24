import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Teams from './components/Teams';
import Register from './components/Register';
// import Upload from './components/Upload';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/upload" element={<Upload />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
