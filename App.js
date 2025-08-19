import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
