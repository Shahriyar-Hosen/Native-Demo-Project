/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../Components/Card';

const Cards = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require('../assets/jacket.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
});
export default Cards;
