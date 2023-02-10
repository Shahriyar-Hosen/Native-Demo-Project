/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Borders from './app/stylesModule/Borders';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <Borders />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
