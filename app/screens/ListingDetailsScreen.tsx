/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../Components/Card';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        image={require('../assets/jacket.jpg')}
        title="Red jacket for sale"
        subTitle="$100"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ListingDetailsScreen;
