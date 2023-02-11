import React, {FC, PropsWithChildren} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

interface TextInputProps extends PropsWithChildren {
  icon?: string;
  placeholder?: string;
}

const AppTextInput: FC<TextInputProps> = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={20} color={colors.medium} />}
      <TextInput
        style={styles.textInput}
        {...otherProps}
        placeholderTextColor={colors.medium}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    color: colors.dark,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default AppTextInput;
