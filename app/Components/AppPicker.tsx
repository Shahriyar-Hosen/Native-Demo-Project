import React, {FC, PropsWithChildren, useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';

interface PickerProps extends PropsWithChildren {
  icon?: string;
  placeholder: string;
}

const AppPicker: FC<PickerProps> = ({icon, placeholder}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              style={styles.icon}
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
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
          <Button title="Close" onPress={() => setModalVisible(false)} />
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
    width: '100%',
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
});

export default AppPicker;
