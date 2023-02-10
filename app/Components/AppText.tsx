/* eslint-disable prettier/prettier */
import React, {PropsWithChildren} from 'react';

import {
  Falsy,
  Platform,
  RecursiveArray,
  RegisteredStyle,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import colors from '../config/colors';

interface textProps extends PropsWithChildren {
  style:
    | TextStyle
    | Falsy
    | RegisteredStyle<TextStyle>
    | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>>;
}

const AppText: React.FC<textProps> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppText;
