import { data } from "../data/data";
import { Category } from "../types/category";


export const getAllCategories = (): Category[] => {
  return data.categories;
};

export const getCategoryById = (id: number): Category | undefined => {
  return data.categories.find((item) => item.id === id);
};