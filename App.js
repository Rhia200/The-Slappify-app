import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';
import SignupScreen from './App/Screens/SignupScreen/SignupScreen';
import ConfirmSignUpScreen from './App/Screens/Confirm sign up screen/ConfirmSignUpScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
  <View style ={styles.root}>
    <LoginScreen/>
  </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor:'skyblue'

  },
});

export default App
