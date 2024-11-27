import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Menu from './components/Menu';
import MapView from './components/MapView';
import Publicaciones from './components/Publicaciones';
import Publicacionesm from './components/Publicacionesm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Informacion from './components/Informacion';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <Header />
        {isLoggedIn ? (
          <div className="flex flex-1 overflow-hidden">
            <Menu />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path="/map" element={<MapView />} />
                <Route path="/publicaciones" element={<Publicacionesm />} />
                <Route path="/informacion" element={<Informacion/>} />
                {/* Añade más rutas aquí según sea necesario */}
                <Route path="*" element={<Navigate to="/map" replace />} />
              </Routes>
            </div>
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;