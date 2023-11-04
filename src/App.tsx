import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Results from './components/results/Results';
import Details from './components/details/Details';
import Search from './components/search/Search';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Search} />
        <Route path="/results" Component={Results} />
        <Route path="/details" Component={Details} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer name='Bryan Sandoval' phoneNumber='+57 310 801 2566' />
    </Router>
  );
};

export default App;