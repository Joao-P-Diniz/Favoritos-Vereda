import React, { useState, useContext } from 'react';
import { AppContext } from './App';

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useContext(AppContext);
  
  // Verifica se o produto já está nos favoritos
  const isFavorite = favorites.some(fav => fav.id === product.id);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>R$ {product.price}</p>
      
      {/* Alterna o texto do botão com base se está nos favoritos */}
      <button
        onClick={() => toggleFavorite(product)}
        className={isFavorite ? 'remove-button' : 'add-button'}
      >
        {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};

export default ProductCard;
