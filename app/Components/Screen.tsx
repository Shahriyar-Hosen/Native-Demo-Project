import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from '../config/colors';

export interface ScreenProps {
  children: React.ReactNode;
  style?: object;
}

const Screen = ({children, style}: ScreenProps) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
