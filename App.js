import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ListaScreen from './screens/ListaScreen';
import { Feather } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer com as seções principais
function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#E1E3E9',
          paddingTop: 40,
        },
        drawerInactiveTintColor: "rgba(28, 28, 30, 0.68)",
        drawerActiveTintColor: '#494A6F',
        drawerLabelStyle: {
          marginLeft: -5,
          fontFamily: 'Quicksand',
          fontSize: 16,
        },
        drawerItemStyle: {
          borderRadius: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Todas as listas"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Arquivadas"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="archive" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lixeira"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="trash-2" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
        <Stack.Screen name="ListaScreen" component={ListaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
