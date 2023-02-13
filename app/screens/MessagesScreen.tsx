import React, {useState} from 'react';
import {FlatList, ImageSourcePropType} from 'react-native';
import {Screen} from '../Components/common';
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from '../Components/Lists';

const initialMessages = [
  {
    id: 1,
    tittle: 'Salman Ahamad',
    description: 'Hey! Is this item still available?',
    image: require('../assets/salman.png'),
  },
  {
    id: 2,
    tittle: 'Salman Ahamad',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../assets/salman.png'),
  },
];

export interface MessageProps {
  id: number;
  tittle: string;
  description: string;
  image: ImageSourcePropType;
}

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: MessageProps) => {
    const newArray = messages.filter(m => m.id !== message.id);
    setMessages(newArray);
  };

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
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

export default MessagesScreen;
