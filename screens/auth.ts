// src/auth.ts

// Tipe untuk data pengguna
export interface User {
    username: string;
    password: string;
}

// "Database" pengguna dalam bentuk array.
// Kita mulai dengan satu akun default.
export const users: User[] = [
    {
        username: 'admin',
        password: 'password123',
    },
];

// Fungsi untuk menambahkan pengguna baru
export const addUser = (newUser: User): boolean => {
    // Cek apakah username sudah ada
    const userExists = users.find(user => user.username.toLowerCase() === newUser.username.toLowerCase());
    
    if (userExists) {
        return false; // Gagal, karena username sudah digunakan
    }
    
    users.push(newUser);
    return true; // Berhasil menambahkan pengguna
};