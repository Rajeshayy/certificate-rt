// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Student from './assets/components/Student';
import Faculty from './assets/components/Faculty';
import Search from './assets/components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student" element={<Student />} />
            <Route path="/search" element={<Search />} />
            {/* 
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
