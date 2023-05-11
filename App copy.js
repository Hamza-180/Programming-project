import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const handleSandwichPress = (sandwichName) => {
    // Action à effectuer lorsqu'un sandwich est sélectionné
    console.log(`Sandwich sélectionné : ${sandwichName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yummi Foods - Sandwichs</Text>
      <TouchableOpacity
        style={styles.sandwichButton}
        onPress={() => handleSandwichPress('Sandwich au poulet')}
      >
        <Text style={styles.buttonText}>Sandwich au poulet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sandwichButton}
        onPress={() => handleSandwichPress('Sandwich végétarien')}
      >
        <Text style={styles.buttonText}>Sandwich végétarien</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sandwichButton}
        onPress={() => handleSandwichPress('Sandwich au jambon')}
      >
        <Text style={styles.buttonText}>Sandwich au jambon</Text>
      </TouchableOpacity>
      {/* Ajoutez plus de boutons pour d'autres sandwichs */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  sandwichButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
