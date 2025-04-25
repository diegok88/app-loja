import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { RootStackParamList } from "../types/navegar";
import { getProductById } from "../service/product";

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'produto'>;

export default function ProductDetail() {
  const route = useRoute<ProductDetailRouteProp>();
  const { productId } = route.params;
  const product = getProductById(productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});