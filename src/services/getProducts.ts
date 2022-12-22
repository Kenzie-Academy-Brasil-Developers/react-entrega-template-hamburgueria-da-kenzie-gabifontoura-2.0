import { iProduct } from "../providers/CartContext";
import { api } from "./api";

const token = localStorage.getItem("@TOKEN");

export async function getProductsApi() {
  const response = await api.get<iProduct[]>("/products", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
