import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import PaymentModal from "../components/Modals/PaymentModal";
import { OffcanvasNav } from "../components/Navbar";
import { Categories, Products } from "../types/storeTypes";

type CartProviderProps = {
  children: ReactNode;
  pageProps: {
    products: Products[];
    categories: Categories;
  };
};
type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  openNavCart: () => void;
  closeNavCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeCartItem: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  products: Products[];
  openModalPayment: () => void;
  closeModalPayment: () => void;
  categories: Categories;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export const useCartContext = () => useContext(CartContext);

export const CartContext = createContext({} as ShoppingCartContext);

export const ShopingCartProvider = ({
  children,
  pageProps,
}: CartProviderProps) => {
  const { products, categories } = pageProps;
  // const [productsData,setProductsData] = useState([...products])
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpenNavCart, setIsOpenNavCart] = useState(false);
  const [isOpenModalPayment, setIsOpenModalPayment] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const cartQuantity = cartItems.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // if find cartItem id === id quantity notfound add 1 quantity
  // else quantity + 1
  const increaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === undefined) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // if find cartItem id === id quantity == 1 remove from cart
  // else quantity -1
  const decreaseQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeCartItem = (id: number) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const openNavCart = () => setIsOpenNavCart(true);

  const closeNavCart = () => setIsOpenNavCart(false);

  const openModalPayment = () => setIsOpenModalPayment(true);
  const closeModalPayment = () => setIsOpenModalPayment(false);


  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeCartItem,
        openNavCart,
        closeNavCart,
        cartItems,
        cartQuantity,
        products,
        openModalPayment,
        closeModalPayment,
        categories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
      <OffcanvasNav isOpenNavCart={isOpenNavCart} />
      <PaymentModal isOpenModalPayment={isOpenModalPayment} />
    </CartContext.Provider>
  );
};
