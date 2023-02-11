import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Icon name="close" size={35} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash-can-outline" size={35} color={colors.white} />
      </View>
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
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
