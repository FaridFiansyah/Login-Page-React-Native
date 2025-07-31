import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; // Pastikan import default
import { SecondScreen } from './screens/SecondScreen';
import { CreateAccountScreen } from './screens/CreateAccountScreen';

// Tipe untuk parameter navigasi
export type RootStackParamList = {
  Home: undefined;
  Second: { username: string }; 
  CreateAccount: undefined;// Mengirim username ke SecondScreen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Menyembunyikan header di semua screen
          animation: 'slide_from_bottom', // Animasi slide
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;