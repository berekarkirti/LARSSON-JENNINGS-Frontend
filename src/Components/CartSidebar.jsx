import React from 'react';
import { useCart } from '../context/CartProvider';
import { FaTrash } from 'react-icons/fa';
import '../Styles/CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => 
{
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleIncrement = (id) => 
  {
    const product = cart.find((product) => product.id === id);
    updateQuantity(id, product.quantity + 1);
  };

  const handleDecrement = (id) => 
  {
    const product = cart.find((product) => product.id === id);
    if (product.quantity > 1) 
    {
      updateQuantity(id, product.quantity - 1);
    }
  };

  const totalPrice = cart.reduce((acc, product) => 
  {
    const price = parseFloat(product.price);
    if (!isNaN(price)) 
    {
      return acc + (price * product.quantity);
    }
    return acc;
  }, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''} d-flex flex-column`}>
      {/* --------------------------close-btn */}
      <button className="close-btn btn" onClick={onClose}>×</button>

      {/* --------------------------title-cart */}
      <h2 className="cart-title text-center">Your Cart</h2>
      <div className="warranty text-center">Enjoy 2 Year Warranty</div>
      <div className="message text-center">
        <span role="img">🎉</span> Congrats! You've unlocked <strong>FREE SHIPPING</strong>
      </div>

      {cart.length === 0 ? (
        <p className="text-center mt-3">Your cart is empty</p>
      ) : (
        <ul className="list-unstyled p-0">
          {cart.map((product) => (
            <li key={product.id} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
              <img src={product.img} alt={product.title} className="img-fluid product-img" />

              <div className="product-info flex-grow-1 ms-3">
                <span>{product.title}</span>
                <div className="product-actions d-flex align-items-center mt-2">

                  <button className="btn" onClick={() => handleDecrement(product.id)}>-</button>

                  <span className="mx-2">{product.quantity}</span>

                  <button className="btn" onClick={() => handleIncrement(product.id)}>+</button>

                </div>
              </div>

              <span className="product-price ms-3">
                ${(parseFloat(product.price) * product.quantity).toFixed(2)}
              </span>

              <button className="remove-btn btn" onClick={() => removeFromCart(product.id)}>
                <FaTrash />
              </button>
              
            </li>
          ))}
        </ul>
      )}

      {/*--------------------------Total price */}
      <div className="total-price text-center mt-3">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
      <button className="Order">Order Now</button>
    </div>
  );
};

export default CartSidebar;
