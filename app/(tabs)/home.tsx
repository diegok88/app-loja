import { View, Text, StyleSheet } from "react-native";
import ButtonCategory from "../componentes/button";
import { router } from "expo-router";



export default function Home() {
 
  const irCategoria = () => {
    router.push('/(stack)/categoria');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seja Bem Vindo</Text>
      <ButtonCategory label="Categorias de Produtos" onPress={irCategoria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    gap: 30,
  },
  texto: {
    fontSize: 50,
  }
});