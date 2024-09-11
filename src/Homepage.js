import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'; 
import { AppContext } from './App';
import ProductCard from './ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { toggleFavorite } = useContext(AppContext);

  const fetchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
      setProducts(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts('cimento');
  }, []);

  return (
    <div>
      <h1>Mercado Livre</h1>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="gallery">
          {products.map(product => (
            <ProductCard key={product.id} product={product} toggleFavorite={toggleFavorite} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
