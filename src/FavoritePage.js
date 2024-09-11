import React, { useContext } from 'react';
import { AppContext } from './App';

const FavoritePage = () => {
  const { favorites, toggleFavorite  } = useContext(AppContext); 

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p style={{ color: "red" }}>Você não tem produtos favoritos.</p>
      ) : (
        <div className="gallery">
          {favorites.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Preço: R$ {product.price.toFixed(2)}</p>
              <button onClick={() => toggleFavorite(product)}>
        Remover dos favoritos
      </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
