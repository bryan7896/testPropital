import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importaciones de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Results from './screens/results/Results';
import Details from './screens/details/Details';
import Home from './screens/home/Home';
import Footer from './components/molecules/footer/Footer';
import Header from './components/molecules/header/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Encabezado de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta de la pantalla de inicio */}
        <Route path="/results" element={<Results />} /> {/* Ruta de la pantalla de resultados */}
        <Route path="/details" element={<Details />} /> {/* Ruta de la pantalla de detalles */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirección a la página de inicio en caso de ruta no encontrada */}
      </Routes>
      <Footer /> {/* Pie de página de la aplicación */}
    </Router>
  );
};

export default App;
