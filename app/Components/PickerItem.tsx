import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from './common';

export interface PickerItemProps {
  item: {
    label: string;
    value: number;
    backgroundColor: string;
    icon: string;
  };
  onPress: () => void;
}

const PickerItem = ({item, onPress}: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

export default PickerItem;
