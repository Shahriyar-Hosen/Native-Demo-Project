import React, {FC, ReactNode} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../config';
import {AppText} from '../common';

interface ListItemProps {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?: () => ReactNode;
  IconComponents?: ReactNode;
}

const ListItem: FC<ListItemProps> = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponents,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponents}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            <Icon color={colors.medium} name="chevron-right" size={25} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },

  subTitle: {
    color: colors.medium,
    fontSize: 16,
  },
  title: {
    fontWeight: '500',
  },
});
export default ListItem;
