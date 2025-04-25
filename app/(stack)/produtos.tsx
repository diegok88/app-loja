import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { ProdutosLista } from '../componentes/produtoLista';
import { RootStackParamList } from '../types/navegar';
import { Product } from '../types/product';
import { getProductsByCategory } from '../service/product';

type ProductsRouteProp = RouteProp<RootStackParamList, 'produtos'>;

export default function ProductsScreen() {
  const route = useRoute<ProductsRouteProp>();
  const { categoryId, categoryTitle } = route.params;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadedProducts = getProductsByCategory(categoryId);
    setProducts(loadedProducts);
  }, [categoryId]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{categoryTitle}</Text>
      <ProdutosLista produtos={products} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
});