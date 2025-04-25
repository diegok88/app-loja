import { Stack } from "expo-router";
import { RootStackParamList } from "../types/navegar";


export default function StackLayout() {
  return (
    <Stack>
     <Stack.Screen name="categoria" options={{ title: 'Categorias'}} />
      <Stack.Screen 
        name="produtos" 
        options={({ route }) => {
          const params = route.params as RootStackParamList['produtos'];
          return {
            title: params?.categoryTitle || 'Produtos',
            headerTitleAlign: 'center'
          };
        }} 
      />
      <Stack.Screen 
        name="produto" 
        options={{ 
          title: 'Detalhes',
          headerTitleAlign: 'center'
        }} 
      />
    </Stack>
  );
}