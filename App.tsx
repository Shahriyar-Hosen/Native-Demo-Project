/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from './app/Components/AppButton';
import AppText from './app/Components/AppText';

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Borders /> */}
      {/* <Shadows /> */}
      {/* <Icons /> */}
      <AppText>I love React Native</AppText>
      <AppButton tittle="login" onPress={() => console.log('Tapped')} />
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
