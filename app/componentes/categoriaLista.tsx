import { FlatList, StyleSheet } from "react-native";
import { CategoriaItem } from "./categoriaItem";
import { getAllCategories } from "../service/category";


export const CategoriaLista: React.FC = () => {
  const categorias = getAllCategories();

  return(
    <FlatList 
      data={categorias} 
      keyExtractor={(item) => item.id.toString()} 
      renderItem={({ item }) => <CategoriaItem categoria={item} />}
      contentContainerStyle={styles.lista}
    />       
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 10,
  },
});