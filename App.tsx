/**
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';
import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <Cards />;
  // return <ListingDetailsScreen />;
  return (
    <View style={styles.mainContainer}>
      <MessagesScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
