import {useFormikContext} from 'formik';
import React from 'react';
import AppPicker from '../common/AppPicker';
import ErrorMessage from './ErrorMessage';

interface TextProps {
  name: string;
  error: string | undefined;
  visible: boolean | undefined;
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
}

function AppFormPicker({items, name, placeholder, error, visible}: TextProps) {
  const {setFieldValue, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
}

export default AppFormPicker;
