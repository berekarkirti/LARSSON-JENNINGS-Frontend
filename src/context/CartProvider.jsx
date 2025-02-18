import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => 
{
    const [cart, setCart] = useState(() => 
    {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => 
    {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => 
    {
        setCart((prevCart) => 
        {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex !== -1) 
            {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            } 
            else 
            {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        alert("Product added to cart");
    };

    const removeFromCart = (id) => 
    {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    const updateQuantity = (id, quantity) => 
    {
        setCart((prevCart) => 
        {
            const updatedCart = prevCart.map((product) =>
                product.id === id ? { ...product, quantity } : product
            );
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
