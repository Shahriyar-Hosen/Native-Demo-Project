/**
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';

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
