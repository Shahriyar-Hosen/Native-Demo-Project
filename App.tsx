/**
 * @format
 */
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from 'react-native';
import {AppText, Screen} from './app/Components/common';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetsDetails')}
    />
  );
};

const Tweets = ({navigation}) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Link />
  </Screen>
);

const TweetsDetails = () => (
  <Screen>
    <AppText>TweetsDetails</AppText>
  </Screen>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
