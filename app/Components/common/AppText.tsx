import React, {PropsWithChildren} from 'react';

import {
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  Text,
  TextStyle,
} from 'react-native';

import {defaultStyles} from '../../config';

interface TextProps extends PropsWithChildren {
  style?:
    | TextStyle
    | Falsy
    | RegisteredStyle<TextStyle>
    | RecursiveArray<TextStyle | Falsy | RegisteredStyle<TextStyle>>;
  numberOfLines?: number;
}

const AppText: React.FC<TextProps> = ({children, style, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
