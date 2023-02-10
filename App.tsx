/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  // console.log(Dimensions.get('screen'));

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>hello world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '50%',
    height: 70,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    color: '#333333',
  },
});

export default App;
