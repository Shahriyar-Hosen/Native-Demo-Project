/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'dodgerblue', flex: 2}}>
        <Text>hello world</Text>
      </View>
      <View style={{backgroundColor: 'gold', flex: 1}}>
        <Text>hello world</Text>
      </View>
      <View style={{backgroundColor: 'tomato', flex: 1}}>
        <Text>hello world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
