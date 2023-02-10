/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from '../Components/AppButton';

import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.text}>Sel What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton tittle="login" onPress={() => console.log('Login')} />
        <AppButton
          tittle="register"
          onPress={() => console.log('Register')}
          color={colors.secondary}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
  },
});

export default WelcomeScreen;
