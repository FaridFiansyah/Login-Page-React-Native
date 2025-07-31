import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // Import dari App.tsx

type SecondScreenRouteProp = RouteProp<RootStackParamList, 'Second'>;
type SecondScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Second'>;

export function SecondScreen() {
    const navigation = useNavigation<SecondScreenNavigationProp>();
    const route = useRoute<SecondScreenRouteProp>();
    const { username } = route.params; // Menerima username

    const handleLogout = () => {
        // Kembali ke halaman login
        navigation.replace('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Selamat Datang,</Text>
            <Text style={styles.usernameText}>{username}!</Text>
            
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Latar belakang terang
    },
    welcomeText: {
        fontSize: 28,
        color: '#333',
    },
    usernameText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#007aff',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#d9534f', // Warna merah untuk logout
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});