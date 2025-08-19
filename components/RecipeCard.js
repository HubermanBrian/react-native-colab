import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => (
  <View style={styles.card}>
    <Image source={{ uri: recipe.image }} style={styles.image} />
    <Text style={styles.title}>{recipe.title}</Text>
    <Text style={styles.description}>{recipe.description}</Text>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>View Details</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default RecipeCard;
