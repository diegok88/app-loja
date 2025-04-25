import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: 'blue', 
        tabBarInactiveTintColor: 'grey',
        headerStyle: { backgroundColor: '#E0E0E0' },
        headerTintColor: '#333333',
        headerTitleStyle: { fontSize: 30 },
        tabBarStyle: { backgroundColor: '#E0E0E0' },
        headerTitleAlign: 'center'
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({color, focused}) => (
            <Ionicons 
              name={focused ? 'home-sharp' : 'home-outline'} 
              color={color} 
              size={24} 
            />
          ) 
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: 'Sobre mim', 
          tabBarIcon: ({color, focused}) => (
            <Ionicons 
              name={focused ? 'person-circle' : 'person-circle-outline'} 
              color={color} 
              size={24} 
            />
          ) 
        }} 
      />
    </Tabs>
  );
}