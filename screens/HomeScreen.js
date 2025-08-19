import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Importar imágenes directamente
import spaghettiImage from '../assets/spaghetti.jpg';
import chickenCurryImage from '../assets/chicken_curry.jpg';
import chocolateCakeImage from '../assets/chocolate_cake.jpg';

const recipes = [
  { id: '1', title: 'Spaghetti Carbonara', description: 'Un clásico plato italiano con pasta y salsa cremosa.', image: spaghettiImage },
  { id: '2', title: 'Chicken Curry', description: 'Un plato especiado y lleno de sabor con pollo tierno.', image: chickenCurryImage },
  { id: '3', title: 'Chocolate Cake', description: 'Un postre rico y húmedo que derrota en la boca.', image: chocolateCakeImage },
];

const HomeScreen = ({ navigation }) => {
  const renderRecipe = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
      >
        <Text style={styles.viewButtonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('AddRecipe')}
      >
        <LinearGradient
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.addButtonGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Ionicons name="add-circle" size={28} color="white" />
          <Text style={styles.addButtonText}>Agregar Receta</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  viewButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  addButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default HomeScreen;
