/**
 * @format
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ImageInputList from './app/Components/ImageInputList';

const App = () => {
  const [imageUris, setImageUris] = useState(['']);

  const onAddImage = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };
  const onRemoveImage = (uri: string) => {
    setImageUris(imageUris.filter(u => u !== uri));
  };

  return (
    <View style={styles.container}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      />
    </View>
  );
  // return <ListingEditScreen />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});

export default App;
