import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollRestoration from './utils/ScrollRestoration';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Curso from './pages/Curso';
import Docentes from './pages/Docentes';
import Editais from './pages/Editais';
import Contatos from './pages/Contatos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollRestoration />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/editais" element={<Editais />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
        <GlobalStyles />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
