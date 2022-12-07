import { createContext, ReactNode, useContext, useState } from "react";
import { Products } from "../types/storeTypes";

type CartProviderProps = {
  children: ReactNode;
  pageProps: {
    products: Products[];
  };
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: number;
};

export const useCartContext = () => useContext(CartContext);

export const CartContext = createContext({} as ShoppingCartContext);

export const ShopingCartProvider = ({
  children,
  pageProps,
}: CartProviderProps) => {
  const { products } = pageProps;
  // console.log(products);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log(cartItems)
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  
  return (
    <CartContext.Provider value={{ getItemQuantity, increaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
