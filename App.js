/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
// import AboutScreen from './src/screens/AboutScreen';
// import Flexbox from './src/screens/Flexbox';
// import StackNavigation from './src/components/StackNavigation';
// import TabNavigation from './src/components/TabNavigation';
import {AuthProvider} from './src/Context/AuthContext';
import AppNav from './src/Navigation/AppNav';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
