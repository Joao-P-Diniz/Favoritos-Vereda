import React, { useContext } from 'react';
import { AppContext } from './App';
import favoritado from './img/favoritado.png'; // Imagem de favorito (quando favoritado)
import favoritar from './img/favoritar.png'; // Imagem de favoritar (quando não favoritado)

const FavoritePage = () => {
  const { favorites, toggleFavorite , isFavorite } = useContext(AppContext); 

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p style={{ color: "red" }}>Você não tem produtos favoritos.</p>
      ) : (
        <div className="gallery">
          {favorites.map(product => (
            <div key={product.id} className="product-card">
            <img
  className="favorite-icon"
  src={isFavorite ? favoritar :favoritado } // Troca entre as imagens baseado no estado
  alt={isFavorite ? "Favoritar" :"Favoritado" } // Define o texto alternativo
  onClick={() => toggleFavorite(product)} // Chama a função ao clicar
/>
              <img src={product.thumbnail} alt={product.title} />
              <p>Preço: R$ {product.price.toFixed(2)}</p>
              <h3>{product.title}</h3>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
