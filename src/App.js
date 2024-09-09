import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Suponha que você tenha o CSS separado
import Modal from './Modal.js'; // Importe o componente Modal

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null); // Armazena o produto selecionado
  const [products, setProducts] = useState([]); // Armazena os produtos
  const [favorites, setFavorites] = useState([]); // Armazena os produtos favoritos
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla a visibilidade do modal

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use uma URL de API pública para testes
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('API Response:', response.data); // Debug: mostra a resposta da API

        // Para o teste, adapte a estrutura dos dados recebidos
        const productData = response.data.map((post) => ({
          name: post.title,
          price: 'R$ 100,00', // Valor fictício
          description: post.body,
          imageUrl: 'https://via.placeholder.com/200', // Imagem fictícia
        }));

        setProducts(productData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const toggleDescription = (productName) => {
    setSelectedProduct((prev) => (prev === productName ? null : productName)); // Alterna a exibição da descrição
  };

  const toggleFavorite = (productName) => {
    console.log(`Toggle Favorite: ${productName}`); // Debug: produto clicado
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.includes(productName);
      console.log(`Is favorited: ${isFavorited}`); // Debug: verifica se o produto está favoritado
  
      if (isFavorited) {
        // Remove o produto da lista de favoritos e também da lista de produtos
        const updatedFavorites = prevFavorites.filter((fav) => fav !== productName);
        console.log(`Removing from favorites: ${updatedFavorites}`); // Debug: favoritos atualizados
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.name !== productName)
        );
        return updatedFavorites;
      } else {
        const updatedFavorites = [...prevFavorites, productName];
        console.log(`Adding to favorites: ${updatedFavorites}`); // Debug: favoritos atualizados
        return updatedFavorites;
      }
    });
  };
  

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="search-bar"></div>
        </div>
      </header>

      <main>
        <h1>Meus Favoritos</h1>
        <div className="favorites-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.name}
                className={`favorite-item ${selectedProduct === product.name ? 'expanded' : ''}`}
              >
                <i
                  className={`favorite-icon fas fa-heart ${favorites.includes(product.name) ? 'favorited' : ''}`}
                  onClick={() => toggleFavorite(product.name)}
                ></i>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="view-btn" onClick={() => openModal(product)}>
                  Ver Produto
                </button>

                {selectedProduct?.name === product.name && (
                  <p className="description">{product.description}</p>
                )}
              </div>
            ))
          ) : (
            <p>Carregando produtos...</p>
          )}
        </div>

        {selectedProduct && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            product={selectedProduct}
          />
        )}
      </main>

      <footer>
        <p>&copy; 2024 Marketplace. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
