import {useFormikContext} from 'formik';
import React from 'react';
import AppTextInput, {TextInputProps} from '../common/AppTextInput';

import ErrorMessage from './ErrorMessage';

interface TextProps extends TextInputProps {
  name: string;
  error: string | undefined;
  visible: boolean | undefined;
  maxLength?: number | undefined;
  multiline?: boolean | undefined;
  numberOfLines?: number | undefined;
}
const AppFormField = ({
  name,
  width,
  error,
  visible,
  ...otherProps
}: TextProps) => {
  const {setFieldTouched, handleChange} = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        name={name}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
};

export default AppFormField;
