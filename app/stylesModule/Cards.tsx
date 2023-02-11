import React from 'react';
import {StyleSheet, View} from 'react-native';

const Shadows = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
    // shadow properties don't work on Android (only on iOS)
    // Android device only works with elevation
  },
});
export default Shadows;
