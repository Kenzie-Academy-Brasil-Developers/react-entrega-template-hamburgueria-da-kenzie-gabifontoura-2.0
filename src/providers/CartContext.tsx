import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
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

interface iProductsResponse {
  (): Promise<void>;
  data: iProduct[];
}

interface iCartProviderData {
  cart: iProduct[];

  addProduct: (product: iProduct) => void;

  deleteProduct: (product: iProduct) => void;

  products: iProduct[];

  setProducts: React.Dispatch<React.SetStateAction<any>>;

  search: string;

  setSearch: React.Dispatch<React.SetStateAction<string>>;

  filteredProducts: iProduct[];
}

export const CartContext = createContext<iCartProviderData>(
  {} as iCartProviderData
);

export const CartProvider = ({ children }: iCartProps) => {
  const [cart, setCart] = useState<iProduct[]>([]);
  const [products, setProducts] = useState<iProduct[] | any>([]);
  const [search, setSearch] = useState("");

  const { setGlobalLoading } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      (async (): Promise<iProductsResponse | undefined> => {
        try {
          setGlobalLoading(true);
          const response = await api.get<iProductsResponse, any>("/products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const productsListAPI = response.data;

          setProducts(productsListAPI);

          return response;
        } catch (error) {
          console.log(error);
        } finally {
          setGlobalLoading(false);
        }
      })();
    }
  }, []);

  const addProduct = (product: iProduct) => {
    toast.success(`${product.name} foi adicionado a sacola de compras`);
    if (cart.find((element) => element.id === product.id)) {
      setCart(
        cart.map((currentProduct) => {
          if (
            currentProduct.id === product.id &&
            currentProduct.count !== undefined
          ) {
            return { ...currentProduct, count: currentProduct.count + 1 };
          }

          return product;
        })
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: iProduct) => {
    toast.warn(`${productToBeDeleted.name} removido da sacola de compras`);
    if (
      productToBeDeleted.count !== undefined &&
      productToBeDeleted.count > 1
    ) {
      setCart(
        cart.map((currentProduct) => {
          if (
            currentProduct.id === productToBeDeleted.id &&
            currentProduct.count !== undefined
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
        addProduct,
        deleteProduct,
        products,
        setProducts,
        search,
        setSearch,
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
