import React, {PropsWithChildren} from 'react';

import {
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  Text,
  TextStyle,
} from 'react-native';

import {defaultStyles} from '../config/styles';

interface TextProps extends PropsWithChildren {
  style:
    | TextStyle
    | Falsy
    | RegisteredStyle<TextStyle>
    | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>>;
}

const AppText: React.FC<TextProps> = ({children, style}) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
