/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';

import navigationTheme from './app/navigation/navigationTheme';

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
