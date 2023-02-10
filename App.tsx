/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';

function App(): JSX.Element {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
  // return <Cards />;
  // return <ListingDetailsScreen />;
  // return (
  //   <View style={styles.mainContainer}>
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
