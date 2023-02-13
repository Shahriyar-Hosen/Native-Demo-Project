import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

// const AppNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="Feed"
//       component={FeedNavigator}
//       options={{
//         tabBarIcon: ({color, size}) => (
//           <MaterialCommunityIcons name="home" color={color} size={size} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="ListingEdit"
//       component={ListingEditScreen}
//       options={({navigation}) => ({
//         tabBarButton: () => (
//           <NewListingButton
//             onPress={() => navigation.navigate(routes.LISTING_EDIT)}
//           />
//         ),
//         tabBarIcon: ({color, size}) => (
//           <MaterialCommunityIcons
//             name="plus-circle"
//             color={color}
//             size={size}
//           />
//         ),
//       })}
//     />
//     <Tab.Screen
//       name="Account"
//       component={AccountNavigator}
//       options={{
//         tabBarIcon: ({color, size}) => (
//           <MaterialCommunityIcons name="account" color={color} size={size} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

export default AppNavigator;
