import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Product } from "../types/product";
import { RootStackParamList } from "../types/navegar";

interface ProdutoItemProp {
  produto: Product;
}

export const ProdutoItem: React.FC<ProdutoItemProp> = ({ produto }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const handlePress = () => { 
    navigation.navigate('produto', { productId: produto.id }) 
  };
  
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: produto.image }} style={styles.imagem} />
        <View style={styles.detalhes}>
          <Text style={styles.titulo}>{produto.title}</Text>
          <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  detalhes: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
});