import { useEffect } from "react";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { iLoginFormValues } from "../components/forms/LoginForm";
import { iRegisterFormValues } from "../components/forms/SignUpForm";

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

interface iUserContext {
  user: iUser | null;
  userRegister: (formData: iRegisterFormValues) => void;
  userLogin: (formData: iLoginFormValues) => void;
  userLogout: () => void;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const themeStorage = localStorage.getItem("@THEME_PREFERENCE");

  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<iUser | any>(null);
  const [darkMode, setDarkMode] = useState<boolean>(
    themeStorage ? JSON.parse(themeStorage) : true
  );

  useEffect(() => {
    localStorage.setItem("@THEME_PREFERENCE", JSON.stringify(darkMode));
  }, [darkMode]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userID = localStorage.getItem("@USERid");

    (async () => {
      if (token) {
        try {
          setGlobalLoading(true);
          const response = await api.get("/users/" + userID, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response);

          navigate("/home");
        } catch (error) {
          console.log(error);
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

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
      localStorage.setItem("@USERid", response.data.user.id + "");

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
    localStorage.removeItem("@USERid");
    localStorage.removeItem("@CURRENT_SALE");

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
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
