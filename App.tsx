/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from './app/stylesModule/Icons';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Borders /> */}
      {/* <Shadows /> */}
      <Icons />
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
