import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, defaultStyles} from '../../config';

export interface TextInputProps extends PropsWithChildren {
  name?: string;
  icon?: string;
  width?: number | string | undefined;
  placeholder?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  keyboardType?: string;
  textContentType?: string;
  secureTextEntry?: boolean;
  onChangeText?: Function;
  onBlur?: () => void;
}

const AppTextInput: FC<TextInputProps> = ({
  icon,
  width = '100%',
  ...otherProps
}) => {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Icon style={styles.icon} name={icon} size={20} color={colors.medium} />
      )}
      <TextInput
        style={defaultStyles.text}
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
    padding: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});

export default AppTextInput;
