import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importa suas páginas
import Cartas from './pages/Cartas';
import Fotos from './pages/Fotos';
import Menu from './Menu';
import Contagem from './pages/Contagem';

const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                {/* Define as rotas do aplicativo */}
                <Routes>
                    <Route path="./" element={<Home />} />
                    <Route path="./cartas" element={<Cartas />} />
                    <Route path="./fotos" element={<Fotos />} />
                    <Route path="./contagem" element={<Contagem />} />
                </Routes>
            </div>
            <h1>oi</h1>
        </Router>
    );
};

export default App;