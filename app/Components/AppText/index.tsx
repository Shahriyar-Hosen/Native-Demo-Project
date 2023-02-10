/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const AppText = ({children}: {children: string}) => {
  return <Text style={styles.test}>{children}</Text>;
};

export default AppText;
