import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import EditTask from './pages/EditTask';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
      </div>
    </Router>
  );
}

export default App;