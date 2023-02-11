/**
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';
import Icons from './app/Components/Icons';
import ListItem from './app/Components/ListItem';

const App = () => {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <Cards />;
  // return <ListingDetailsScreen />;
  return (
    <View style={styles.mainContainer}>
      {/* <Icons size={100} name="email" /> */}
      {/* <MessagesScreen /> */}
      <ListItem
        title="My Tittle"
        subTitle="My subtitle"
        ImageComponents={<Icons size={50} name="email" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
