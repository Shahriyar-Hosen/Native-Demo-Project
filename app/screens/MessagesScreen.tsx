import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../Components/ListItem';
import ListItemSeparator from '../Components/ListItemSeparator';
import Screen from '../Components/Screen';

const messages = [
  {
    id: 1,
    tittle: 'T1',
    description: 'D1',
    image: require('../assets/salman.png'),
  },
  {
    id: 2,
    tittle: 'T2',
    description: 'D2',
    image: require('../assets/salman.png'),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.tittle}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </Screen>
  );
};

export default MessagesScreen;
