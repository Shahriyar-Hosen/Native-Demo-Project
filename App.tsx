/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

function App(): JSX.Element {
  return <WelcomeScreen />;
  // return (
  //   <View style={styles.mainContainer}>
  //     {/* <ViewImageScreen /> */}
  //     {/* <Borders /> */}
  //     {/* <Shadows /> */}
  //     {/* <Icons /> */}
  //     <AppText>I love React Native</AppText>
  //     <AppButton tittle="login" onPress={() => console.log('Tapped')} />
  //   </View>
  // );
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
