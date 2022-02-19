import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App: () => Node = () => {
  console.disableYellowBox = true;

  //define navigation stack
  const AppStack = createStackNavigator()
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <AppStack.Screen name="Cart" component={CartScreen} options={{ headerShown: true }}/>
        </AppStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  titleText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default App;
