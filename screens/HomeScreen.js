import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

// Importar imágenes directamente
import spaghettiImage from '../assets/spaghetti.jpg';
import chickenCurryImage from '../assets/chicken_curry.jpg';
import chocolateCakeImage from '../assets/chocolate_cake.jpg';

const recipes = [
  { id: '1', title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', image: spaghettiImage },
  { id: '2', title: 'Chicken Curry', description: 'A spicy and flavorful dish.', image: chickenCurryImage },
  { id: '3', title: 'Chocolate Cake', description: 'A rich and moist dessert.', image: chocolateCakeImage },
];

const HomeScreen = ({ navigation }) => {
  const renderRecipe = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.image}
        onError={(error) => console.error(`Error loading image for recipe: ${item.title}`, error)}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
      >
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderRecipe}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
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

export default HomeScreen;
