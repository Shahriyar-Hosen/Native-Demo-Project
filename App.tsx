/**
 * @format
 */
import React from 'react';
import AppPicker from './app/Components/AppPicker';
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
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="user name" />
    </Screen>
  );
};

export default App;
