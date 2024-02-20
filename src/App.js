import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Users } from './Pages/Users';
import { Footer } from './Components/Footer';

 
function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
