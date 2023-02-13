import {useFormikContext} from 'formik';
import React from 'react';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

export interface ImagePickerProps {
  name: string;
  error: string | string[] | undefined;
  visible: boolean | undefined;
}

const FormImagePicker = ({name, error, visible}: ImagePickerProps) => {
  const {setFieldValue, values} = useFormikContext();

  // const formValues = values as ListingEditProps;

  const imageUris = values[name];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
};

export default FormImagePicker;
