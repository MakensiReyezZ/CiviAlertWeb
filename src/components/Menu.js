import React from 'react';
import { Link } from 'react-router-dom';
import { FaMap, FaClipboard, FaRegFileAlt, FaInfoCircle, FaBars, FaTimes, FaPeopleArrows, FaDoorOpen, FaPeopleCarry } from 'react-icons/fa';

const Menu = () => {
  return (
    <div className="w-64 bg-gray-700  p-4 shadow-lg">
      {/* Imagen y nombre del perfil */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://img.freepik.com/vector-premium/lindo-oficial-seguridad-publica-ayudando-ciudadanos-vector-dibujos-animados_1022901-115937.jpg" // Cambia esta URL por la imagen de perfil que desees
          alt="Perfil"
          className="w-24 h-24 rounded-full mb-2"
        />
        <p className="text-white text-lg font-semibold">Iván Lozano</p>
      </div>

      {/* Opciones de menú */}
      <nav>
        <ul className="space-y-4 text-white font-medium">
          <li className="flex items-center space-x-2">
            <FaMap size={24} />
            <Link to="/map">Mapa de incidentes</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaPeopleCarry size={24}/>
            <Link to="/publicaciones">Publicaciones</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaRegFileAlt size={24} />
            <Link to="/reportes">Formulario de reportes</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaInfoCircle size={24} />
            <Link to="/informacion" className="hover:text-gray-600">Información</Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaDoorOpen size={24}/>
            <a href="./App">Salir</a>
            {/*<Link to="/App" className="hover:text-gray-600">Salir</Link>*/}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

