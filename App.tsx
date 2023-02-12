/**
 * @format
 */
import React, {useState} from 'react';
import AppPicker from './app/Components/AppPicker';
import AppTextInput from './app/Components/AppTextInput';
import Screen from './app/Components/Screen';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <ListingDetailsScreen />;
  // return <AccountScreen />;
  // return <ListingsScreen />;
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};

export default App;
