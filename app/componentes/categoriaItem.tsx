import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Category } from "../types/category";
import { RootStackParamList } from "../types/navegar";

interface CategoriaItemProps {
  categoria: Category;
} 

export const CategoriaItem: React.FC<CategoriaItemProps> = ({ categoria }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const handlePress = () => {
  navigation.navigate('produtos', { 
    categoryId: categoria.id,
    categoryTitle: categoria.title
  });
};

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: categoria.imagem }} style={styles.imagem} />
        <Text style={styles.titulo}>{categoria.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    width: '45%',
  },
  imagem: {
    width: '100%',
    height: 150,
  },
  titulo: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});