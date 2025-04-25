import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoriaLista } from "../componentes/categoriaLista";

export default function Categoria() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Categorias</Text>
      <CategoriaLista />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  }
});