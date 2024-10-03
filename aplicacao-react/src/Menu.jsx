import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import './Menu.css'; // Importa o estilo da Navbar

const Menu = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Cartas">Cartas</Link></li>
                <li><Link to="/Fotos">Fotos</Link></li>
                <li><Link to="/Contagem">Contagem</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;