// Modal.js
import React from 'react';
import './Modal.css'; // Importe os estilos do modal

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={product.imageUrl} alt={product.name} className="modal-image" />
        <h2 className="modal-title">{product.name}</h2>
        <p className="modal-price">{product.price}</p>
        <p className="modal-description">{product.description}</p>
      </div>
    </div>
  );
};

export default Modal;
