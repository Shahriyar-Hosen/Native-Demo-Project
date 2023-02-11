import React, {useState} from 'react';
import {FlatList, ImageSourcePropType} from 'react-native';
import ListItem from '../Components/ListItem';
import ListItemDeleteAction from '../Components/ListItemDeleteAction';
import ListItemSeparator from '../Components/ListItemSeparator';
import Screen from '../Components/Screen';

const initialMessages = [
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

export interface MessageProps {
  id: number;
  tittle: string;
  description: string;
  image: ImageSourcePropType;
}

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);

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
      />
    </Screen>
  );
};

export default MessagesScreen;
