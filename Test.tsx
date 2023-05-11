import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [imageSource, setImageSource] = useState(null);

    const handleLogin = () => {
        // Vérification des informations d'identification ici
        // (par exemple, envoi d'une demande à un serveur)

        // Redirection vers l'écran Home si les informations sont valides

    };

    const handleImageUpload = () => {
        const options = {
            title: 'Sélectionner une image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };


    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yummi Foods</Text>
            {imageSource && <Image style={styles.image} source={imageSource} />}
            <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
                <Text style={styles.buttonText}>Choisir une image</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 24,
    },
    uploadButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        marginBottom: 24,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
