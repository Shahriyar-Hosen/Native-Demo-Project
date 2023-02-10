/* eslint-disable prettier/prettier */

import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <Text style={styles.text}> hello</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: '#333333',
  },
});

export default WelcomeScreen;
