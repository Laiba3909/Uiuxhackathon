
'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react'; // Clerk for user authentication
import axios from 'axios'; // Axios to make API calls with JWT

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const { user } = useUser(); // Get the authenticated user
  const { getToken } = useAuth();  // Use useAuth to access token management
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (user) {
        const storedToken = await getToken(); // Get the JWT token from Clerk
        setToken(storedToken); // Set the token
      }
    };

    fetchToken(); // Fetch the token when user changes
  }, [user, getToken]); // Run whenever user or getToken changes

  useEffect(() => {
    if (!token) return;

    // Fetch cart data once token is available
    const fetchCart = async () => {
      try {
        const { data } = await axios.get('/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart(data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart(); // Fetch the cart when token changes
  }, [token]); // Only run when token changes

  const addToCart = async (product: Product) => {
    if (!token) {
      console.error('User is not authenticated');
      return;
    }

    try {
      const { data } = await axios.post('/api/cart', product, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (id: number) => {
    if (!token) {
      console.error('User is not authenticated');
      return;
    }

    try {
      const { data } = await axios.delete(`/api/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    if (!token) {
      console.error('User is not authenticated');
      return;
    }

    try {
      const { data } = await axios.delete('/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(data);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart ,setCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
