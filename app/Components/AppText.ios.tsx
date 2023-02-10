/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = ({children}: {children: string}) => {
  return <Text style={styles.test}>{children}</Text>;
};

const styles = StyleSheet.create({
  test: {
    color: 'tomato',
    fontSize: 18,
    fontFamily: 'Avenir',
  },
});

export default AppText;
