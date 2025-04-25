import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  '(tabs)': undefined;
  categoria: undefined;
  produtos: { 
    categoryId: number;
    categoryTitle: string;
  };
  produto: {
    productId: number;
  };
};

export type ProductsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'produtos'
>;

export type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'produto'
>;

export type ProductsRouteProp = {
  params: RootStackParamList['produtos'];
};

export type ProductDetailRouteProp = {
  params: RootStackParamList['produto'];
};