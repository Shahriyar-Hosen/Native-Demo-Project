import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

interface ListItemProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subTitle,
  image,
  onPress,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  detailsContainer: {},

  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
  title: {
    fontWeight: '500',
  },
});
export default ListItem;
