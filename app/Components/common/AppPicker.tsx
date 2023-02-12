import React, {FC, PropsWithChildren, useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../config';

import {AppText, Screen} from '../common';
import PickerItem from '../PickerItem';

export interface PickerProps extends PropsWithChildren {
  icon?: string;
  placeholder: string;
  items: {
    label: string;
    value: number;
  }[];
  selectedItem?: {
    label: string;
    value: number;
  };
  onSelectItem: (item: any) => void;
  width?: number | string | undefined;
}

const AppPicker: FC<PickerProps> = ({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && (
            <Icon
              style={styles.icon}
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <Icon
            style={styles.icon}
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            color={colors.primary}
            title="Close"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
