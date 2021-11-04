/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStack } from './navigation/mainStack';
import { ThemeProvider } from './utils/ThemeProvider';


const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
