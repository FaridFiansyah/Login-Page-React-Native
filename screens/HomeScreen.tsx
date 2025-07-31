// screens/HomeScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { users } from './auth'; 

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Cari pengguna di dalam array "users"
    const foundUser = users.find(
      user => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );

    if (foundUser) {
      // Jika ditemukan, navigasi ke SecondScreen
      navigation.replace('Second', { username: foundUser.username });
    } else {
      // Jika tidak, tampilkan error
      Alert.alert('Login Gagal', 'Username atau password salah!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

       {/*dibawah ini cara buat komen}
      {/* Tombol untuk navigasi ke halaman pendaftaran */}
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.linkText}>Belum punya akun? Buat di sini</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007aff',
    marginTop: 20,
  },
});

export default HomeScreen;