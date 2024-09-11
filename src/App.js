import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import FavoritePage from './FavoritePage';
import './styles.css';

const AppContext = React.createContext();

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    if (favorites.some(fav => fav.id === product.id)) {
      setFavorites(favorites.filter(fav => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <AppContext.Provider value={{ favorites, toggleFavorite }}>
      <Router>
        <div className="app-container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites"> Favoritos</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
export { AppContext };
