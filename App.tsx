/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row', // horizontal or vertical
    justifyContent: 'center', // main
    alignItems: 'center', // secondary
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  box1: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 300,
  },
  box2: {
    backgroundColor: 'gold',
    width: 100,
    height: 100,
  },
  box3: {
    backgroundColor: 'tomato',

    width: 100,
    height: 100,
  },
  box4: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
  },
  box5: {
    backgroundColor: 'greenyellow',

    width: 100,
    height: 100,
  },

  text: {
    fontSize: 24,
    color: '#333333',
  },
});

export default App;
