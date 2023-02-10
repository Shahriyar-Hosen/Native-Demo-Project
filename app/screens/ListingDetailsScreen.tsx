/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppText from '../Components/AppText';
import ListItem from '../Components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jecket for sale</AppText>
        <AppText style={styles.subTittle}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/salman.png')}
            title="Salman Ahamad"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subTittle: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
