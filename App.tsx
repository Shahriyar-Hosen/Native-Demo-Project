/**
 * @format
 */
import React from 'react';
import AppTextInput from './app/Components/AppTextInput';
import Screen from './app/Components/Screen';

const App = () => {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <ListingDetailsScreen />;
  // return <AccountScreen />;
  // return <ListingsScreen />;
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="user name" />
    </Screen>
  );
};

export default App;
