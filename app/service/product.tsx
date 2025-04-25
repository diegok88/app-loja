import { data } from "../data/data";
import { Product } from "../types/product";


export const getAllProducts = (): Product[] => {
  return data.products;
};

export const getProductById = (id: number): Product | undefined => {
  return data.products.find((item) => item.id === id);
};

export const getProductsByCategory = (idCategory: number): Product[] => {
  return data.products.filter((item) => item.idCategory === idCategory);
};