/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
    width: 50,
    height: 50,
    backgroundColor: '#fc4c65',
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: '#4ecdc4',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
