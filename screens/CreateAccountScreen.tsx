// screens/CreateAccountScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { addUser } from './auth'; // Import fungsi dari auth.ts

type CreateAccountNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateAccount'>;

export function CreateAccountScreen() {
  const navigation = useNavigation<CreateAccountNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua kolom harus diisi!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan konfirmasi password tidak cocok!');
      return;
    }

    const success = addUser({ username, password });

    if (success) {
      Alert.alert('Sukses', 'Akun berhasil dibuat! Silakan login.');
      navigation.goBack(); // Kembali ke halaman login
    } else {
      Alert.alert('Gagal', 'Username sudah digunakan. Coba yang lain.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buat Akun Baru</Text>
      
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

      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        placeholderTextColor="#999"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Sudah punya akun? Login</Text>
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
    fontSize: 28,
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
  }
});