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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface OptionsProps {
  saveToPhotos: boolean;
  mediaType: string;
}

const App = () => {
  const [cameraPhoto, setCameraPhoto] = useState('');
  const [galleryPhoto, setGalleryPhoto] = useState('');
  const [imageUri, setImageUri] = useState('');

  let options: OptionsProps = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const requestPermission = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log('Permissions Status:-', status);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };
  const selectImage = async () => {
    try {
      const result = await launchImageLibrary(galleryPhoto);
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
  const openGallery = async () => {
    selectImage();
    // const result = await launchImageLibrary(galleryPhoto);
    // setGalleryPhoto(result.assets[0].uri);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openCamera} style={styles.button}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      {cameraPhoto && (
        <Image style={styles.imageStyle} source={{uri: cameraPhoto}} />
      )}

      <TouchableOpacity onPress={openGallery} style={styles.button}>
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
