/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // horizontal or vertical
        justifyContent: 'center', // main
        alignItems: 'center', // secondary
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 300,
          alignSelf: 'flex-start',
        }}>
        <Text>hello world</Text>
      </View>
      <View style={{backgroundColor: 'gold', width: 100, height: 200}}>
        <Text>hello world</Text>
      </View>
      <View style={{backgroundColor: 'tomato', width: 100, height: 100}}>
        <Text>hello world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row', // horizontal or vertical
    justifyContent: 'center', // main
    alignItems: 'baseline', // secondary
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
