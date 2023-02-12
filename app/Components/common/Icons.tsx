import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconsProps {
  name: string;
  size?: number;
  iconColor?: string;
  backgroundColor?: string;
}

const Icons = ({
  name,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}: IconsProps) => {
  return (
    <View
      style={[
        styles.iconContainer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
      ]}>
      <Icon name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icons;
