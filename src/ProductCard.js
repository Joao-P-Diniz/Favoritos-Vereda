import React, { useContext } from 'react';
import { AppContext } from './App';
import favoritado from './img/favoritado.png'; // Imagem de favorito (quando favoritado)
import favoritar from './img/favoritar.png'; // Imagem de favoritar (quando não favoritado)

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useContext(AppContext);

  // Verifica se o produto já está nos favoritos
  const isFavorite = favorites.some(fav => fav.id === product.id);

  return (
    
    <div className="product-card">
      {/* Ícone de favoritar/favorito no topo */}
      <img
        className="favorite-icon"
        src={isFavorite ? favoritado : favoritar} // Troca entre as imagens
        alt={isFavorite ? "Favoritado" : "Favoritar"}
        onClick={() => toggleFavorite(product)}
      />
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>R$ {product.price}</p>
    </div>
   
  );
};

export default ProductCard;

