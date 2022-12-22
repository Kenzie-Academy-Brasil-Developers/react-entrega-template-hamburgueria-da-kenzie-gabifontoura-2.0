import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { getProductsApi } from "../services/getProducts";
import { UserContext } from "./UserContext";

interface iCartProps {
  children: ReactNode;
}

export interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  count?: number | undefined;
}

interface iCartProviderData {
  cart: iProduct[];

  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>;

  addProduct: (product: iProduct) => void;

  deleteProduct: (product: iProduct) => void;

  products: iProduct[];

  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;

  search: string;

  setSearch: React.Dispatch<React.SetStateAction<string>>;

  filteredProducts: iProduct[];

  isModalVisible: boolean | null;

  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const CartContext = createContext<iCartProviderData>(
  {} as iCartProviderData
);

export const CartProvider = ({ children }: iCartProps) => {
  const localStorageCart = localStorage.getItem("@CURRENT_SALE");

  const [cart, setCart] = useState<iProduct[]>(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );
  const [products, setProducts] = useState<iProduct[]>([]);
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState<boolean | null>(null);

  const { setGlobalLoading } = useContext(UserContext);


  useEffect(() => {
    cart.length > 0 &&
      localStorage.setItem("@CURRENT_SALE", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
  const token = localStorage.getItem("@TOKEN");

    if (token) {
      const handleGetProducts = async () => {
        try {
          setGlobalLoading(true);
          const response = await getProductsApi();

          setProducts(response);
        } catch (error) {
          console.log(error);
        } finally {
          setGlobalLoading(false);
        }
      };
      handleGetProducts();
    }
  }, []);

  const addProduct = (product: iProduct) => {
    toast.success(`${product.name} foi adicionado a sacola de compras`);
    if (cart.find((element) => element.id === product.id)) {
      setCart(
        cart.map((currentProduct) => {
          if (currentProduct.count && currentProduct.id === product.id) {
            return { ...currentProduct, count: currentProduct.count + 1 };
          }

          return currentProduct;
        })
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const deleteProduct = (productToBeDeleted: iProduct) => {
    toast.warn(`${productToBeDeleted.name} removido da sacola de compras`);
    if (productToBeDeleted.count && productToBeDeleted.count > 1) {
      setCart(
        cart.map((currentProduct) => {
          if (
            currentProduct.count &&
            currentProduct.id === productToBeDeleted.id
          ) {
            return { ...currentProduct, count: currentProduct.count - 1 };
          }

          return currentProduct;
        })
      );
    } else {
      setCart(
        cart.filter(
          (currentProduct) => currentProduct.id !== productToBeDeleted.id
        )
      );
    }
  };

  const filteredProducts = products.filter(
    (product: iProduct) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProduct,
        deleteProduct,
        products,
        setProducts,
        search,
        setSearch,
        filteredProducts,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
