import { useEffect } from "react";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { iLoginFormValues } from "../components/forms/LoginForm";
import { iRegisterFormValues } from "../components/forms/SignUpForm";
import { iCardProps } from "../components/ProductsList/ProductCard";

interface iDefaultErrorResponse {
  error: string;
}

interface iUserProviderProps {
  children: React.ReactNode;
}
interface iUser {
  id: number;
  name: string;
  email: string;
}

interface iLoginResponse {
  accessToken: string;
  user: iUser;
}

interface iRegisterResponse {
  accessToken: string;
  user: iUser;
}

// interface iProductsResponse {
//   data: iCardProps[];
// }

// interface iProduct {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   img: string;
// }

interface iUserContext {
  user: iUser | null;
  userRegister: (formData: iRegisterFormValues) => void;
  userLogin: (formData: iLoginFormValues) => void;
  userLogout: () => void;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  products: iCardProps[] | null;
  setProducts: React.Dispatch<React.SetStateAction<iCardProps[]>>;
  search: string;
  setSearch:React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [products, setProducts] = useState([] as iCardProps[]);
  const [search, setSearch] = useState("");
  

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    (async () => {
      if (token) {
        try {
          setGlobalLoading(true);
          const { data } = await api.get("/products ", {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });

          console.log(data);
          setProducts(data)

          // setProducts(data);

          navigate("/home");
        } catch (error) {
          console.log(error);
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product.name.toLowerCase().includes(search.toLowerCase()) ||
  //     product.category.toLowerCase().includes(search.toLowerCase())
  // );

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      setGlobalLoading(true);
      const response = await api.post<iRegisterResponse>("/users", formData);
      toast.success(response.statusText);
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setGlobalLoading(false);
    }
  };

  async function userLogin(formData: iLoginFormValues) {
    try {
      setGlobalLoading(true);
      const response = await api.post<iLoginResponse>("/login", formData);

      localStorage.setItem("@TOKEN", response.data.accessToken);

      toast.success(response.statusText);
      setUser(response.data.user);
 

      navigate("/home");
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      toast.error(currentError.response?.data.error);
    } finally {
      setGlobalLoading(false);
    }
  }

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  }

 

  return (
    <UserContext.Provider
      value={{
        user,
        userRegister,
        userLogin,
        userLogout,
        globalLoading,
        setGlobalLoading,
        products,
        setProducts,
        search,
        setSearch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};



