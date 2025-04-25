import { FlatList, StyleSheet, Text } from "react-native";
import { ProdutoItem } from "./produtoItem";
import { Product } from "../types/product";

interface ProdutoListaProps {
  produtos: Product[];
}

export const ProdutosLista: React.FC<ProdutoListaProps> = ({produtos}) => {
  return(
    <FlatList 
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <ProdutoItem produto={item} />}
      contentContainerStyle={styles.lista}
      ListEmptyComponent={<Text style={styles.nadaencontrado}>Produtos não encontrados</Text>}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 20,
  },
  nadaencontrado: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    color: '#666',
  },
});