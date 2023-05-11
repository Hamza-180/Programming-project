import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {

    console.log('wachtwoord vergeten');
  };

  const handleCreateAccount = () => {

    console.log('acount aanmaken');
  };

  return (
    <View style={styles.container}>

      <View style={styles.loginContainer}>
        <Image source={require('./image.png')} style={styles.image} />
        <Text style={styles.title}>Yummy Foods</Text>


        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Wachtwoord"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Wachtwoord Vergeten</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccount}>Account aanmaken </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  loginContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '40%',
    backgroundColor: '#582900',
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  forgotPassword: {

    marginTop: 10,
    color: '#888888',
  },
  createAccount: {
    marginTop: 10,
    color: '#888888',
  },
  image: {
    width: 250,
    height: 150,
    color: '#ffffff',



  },

});

export default LoginPage;
