import {useFormikContext} from 'formik';
import React from 'react';
import AppTextInput, {TextInputProps} from './AppTextInput';
import ErrorMessage from './ErrorMessage';

interface TextProps extends TextInputProps {
  name: string;
  error: string | undefined;
  visible: boolean | undefined;
}
const AppFormField = ({name, error, visible, ...otherProps}: TextProps) => {
  const {setFieldTouched, handleChange} = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        name={name}
        {...otherProps}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
};

export default AppFormField;
