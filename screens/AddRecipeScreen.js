import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const AddRecipeScreen = ({ navigation }) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeImage, setRecipeImage] = useState(null);

  const handleSaveRecipe = () => {
    if (!recipeName.trim() || !recipeDescription.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const newRecipe = {
      id: Date.now().toString(),
      title: recipeName.trim(),
      description: recipeDescription.trim(),
      image: recipeImage || require('../assets/icon.png'),
    };

    Alert.alert(
      'Éxito',
      'Receta agregada correctamente',
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back with the new recipe
            navigation.navigate('Home', { newRecipe });
          },
        },
      ]
    );
  };

  const handleImageUpload = () => {
    Alert.alert(
      'Subir Imagen',
      'Funcionalidad de selección de imagen (simulada)',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Seleccionar', onPress: () => setRecipeImage(require('../assets/icon.png')) },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Agregar Nueva Receta</Text>
        <Text style={styles.subtitle}>Comparte tu receta favorita</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre de la Receta</Text>
          <TextInput
            style={styles.input}
            value={recipeName}
            onChangeText={setRecipeName}
            placeholder="Ej: Spaghetti Carbonara"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={recipeDescription}
            onChangeText={setRecipeDescription}
            placeholder="Describe la receta..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Imagen de la Receta</Text>
          <TouchableOpacity style={styles.imageButton} onPress={handleImageUpload}>
            <LinearGradient
              colors={['#667eea', '#764ba2']}
              style={styles.imageButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Ionicons name="image-outline" size={20} color="white" />
              <Text style={styles.imageButtonText}>
                {recipeImage ? 'Cambiar Imagen' : 'Seleccionar Imagen'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          
          {recipeImage && (
            <View style={styles.imageContainer}>
              <Image source={recipeImage} style={styles.previewImage} />
              <TouchableOpacity onPress={() => setRecipeImage(null)} style={styles.removeImage}>
                <Ionicons name="close-circle" size={24} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSaveRecipe}>
            <LinearGradient
              colors={['#28a745', '#20c997']}
              style={styles.saveButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Ionicons name="checkmark-circle" size={20} color="white" />
              <Text style={styles.buttonText}>Guardar Receta</Text>
            </LinearGradient>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.goBack()}
          >
            <LinearGradient
              colors={['#dc3545', '#ff6b6b']}
              style={styles.cancelButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Ionicons name="close-circle" size={20} color="white" />
              <Text style={styles.buttonText}>Cancelar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  imageButton: {
    marginBottom: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  imageButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeImage: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  button: {
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
    overflow: 'hidden',
  },
  saveButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  cancelButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default AddRecipeScreen;
