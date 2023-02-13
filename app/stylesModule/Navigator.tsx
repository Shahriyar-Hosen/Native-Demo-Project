import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppText, Screen} from '../Components/common';
import AuthNavigator from '../navigation/AuthNavigator';

const Tweets = ({navigation}) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate('TweetsDetails', {id: 513})}
    />
  </Screen>
);

const TweetsDetails = ({route}) => (
  <Screen>
    <AppText>TweetsDetails {route.params.id}</AppText>
  </Screen>
);

const Account = () => (
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

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabBarIcons = ({
    route,
    focused,
    color,
    size,
  }: {
    route: RouteProp<ParamListBase, string>;
    focused: boolean;
    color: string;
    size: number;
  }): JSX.Element => {
    let iconName =
      (route.name === 'Feed'
        ? focused
          ? 'home'
          : 'home-outline'
        : focused
        ? 'account'
        : 'account-outline') || '';

    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: 'tomato',
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#eee',
        tabBarInactiveTintColor: 'black',
        tabBarIcon: ({focused, color, size}) =>
          tabBarIcons({route, focused, color, size}),
        headerShown: false,
      })}>
      <Tab.Screen name="Feed" component={StackNavigator} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
export default Navigator;
