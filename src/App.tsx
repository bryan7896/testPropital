import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Results from './screens/results/Results';
import Details from './screens/details/Details';
import Home from './screens/home/Home';
import Footer from './components/molecules/footer/Footer';
import Header from './components/molecules/header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/results" Component={Results} />
        <Route path="/details" Component={Details} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer name='Bryan Sandoval' phoneNumber='+57 310 801 2566' />
    </Router>
  );
};

export default App;