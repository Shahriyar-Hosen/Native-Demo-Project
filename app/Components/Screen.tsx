import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export interface ScreenProps {
  children: React.ReactNode;
}

const Screen = ({children}: ScreenProps) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
