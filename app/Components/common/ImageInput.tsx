import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../config';

interface ImageInputProps {
  imageUri?: string;
  onChangeImage: (props: string) => void;
}

const ImageInput = ({imageUri, onChangeImage}: ImageInputProps) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (status !== 'granted') {
      Alert.alert(
        'Permission',
        'You need to enable permission to access the library.',
        [{text: 'OK'}],
      );
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {text: 'Yes', onPress: () => onChangeImage('')},
        {text: 'No'},
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });
      if (!result.didCancel) {
        if (result.assets !== undefined) {
          let url = (result.assets !== undefined && result.assets[0].uri) || '';
          onChangeImage(url);
        }
      }
    } catch (error) {
      console.log('Error Reading Image', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Icon color={colors.medium} name="camera" size={40} />}

        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    marginVertical: 10,
    overflow: 'hidden',
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImageInput;
