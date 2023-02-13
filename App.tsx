/**
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageInput from './app/Components/common/ImageInput';

const App = () => {
  const [imageUri, setImageUri] = useState('');

  const requestPermission = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    console.log('Permissions Status:-', status);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });
      if (!result.didCancel) {
        if (result.assets !== undefined) {
          let url = (result.assets !== undefined && result.assets[0].uri) || '';
          setImageUri(url);
        }
      }
    } catch (error) {
      console.log('Error Reading Image', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageInput imageUri={imageUri} onChangeImage={uri => setImageUri(uri)} />
      <TouchableOpacity onPress={selectImage} style={styles.button}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      {imageUri && <Image style={styles.imageStyle} source={{uri: imageUri}} />}
    </View>
  );
  // return <ListingEditScreen />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#233f49',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 50,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ebebeb',
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: 20,
    borderRadius: 5,
  },
});

export default App;
