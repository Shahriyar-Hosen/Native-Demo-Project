/* eslint-disable prettier/prettier */
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  test: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: 'tomato',
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: 'black',
      },
    }),
  },
});

export default styles;
