/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const AppText = ({children}: {children: string}) => {
  return <Text style={styles.test}>{children}</Text>;
};

const styles = StyleSheet.create({
  test: {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: 'Avenir',
        color: 'tomato',
      },
      android: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: 'blue',
      },
    }),
  },
});

export default AppText;
