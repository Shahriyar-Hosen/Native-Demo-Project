import React from 'react';
import {StyleSheet, View} from 'react-native';

const Borders = () => {
  return <View style={styles.box} />;
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'dodgerblue',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
    // borderTopWidth: 20,
    // borderTopLeftRadius: 50,
  },
});
export default Borders;
