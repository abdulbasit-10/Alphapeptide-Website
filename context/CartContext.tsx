'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartCount: number;
  cartItems: CartItem[];
  subtotal: number;
  isCartOpen: boolean;
  isOpen: boolean; // Alias to prevent naming mismatches
  toggleCart: () => void;
  addToCart: (product?: { name?: string; price?: number; image?: string }) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'BPC-157', price: 59.99, quantity: 1, image: '/BPC-157.png' }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const addToCart = (product?: { name?: string; price?: number; image?: string }) => {
    setCartItems((prev) => {
      const productName = product?.name || 'Research Compound';
      const existing = prev.find(item => item.name === productName);
      
      if (existing) {
        return prev.map(item => 
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      return [...prev, {
        id: Date.now(),
        name: productName,
        price: product?.price || 59.99,
        quantity: 1,
        image: product?.image || '/BPC-157.png'
      }];
    });
    setIsCartOpen(true); // Automatically slide open the drawer when an item is added
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) => 
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartCount, 
        cartItems, 
        subtotal, 
        isCartOpen, 
        isOpen: isCartOpen, 
        toggleCart, 
        addToCart, 
        updateQuantity, 
        removeItem 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}