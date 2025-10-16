import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (car) => {
    // car can now have an "addOns" array
    setCartItems((prev) => [...prev, car]);
  };

  const removeFromCart = (carId) => {
    setCartItems((prev) => prev.filter(item => item.id !== carId));
  };

  const clearCart = () => setCartItems([]);

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const carPrice = parseFloat(item.price.replace('$', ''));
      const addOnsTotal = item.addOns
        ? item.addOns.reduce((acc, addOn) => acc + (addOn.price || 0), 0)
        : 0;
      return sum + carPrice + addOnsTotal;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
