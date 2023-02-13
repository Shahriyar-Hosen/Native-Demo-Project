import {useFormikContext} from 'formik';
import React, {FC} from 'react';
import AppPicker from '../common/AppPicker';
import {PickerItemProps} from '../PickerItem';
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
    backgroundColor: string;
    icon: string;
  }[];
  selectedItem?: {
    label: string;
    value: number;
  };
  width?: number | string | undefined;
  PickerItemComponent?: FC<PickerItemProps>;
  numberOfColumns?: number;
}

function AppFormPicker({
  items,
  name,
  placeholder,
  error,
  visible,
  width,
  PickerItemComponent,
  numberOfColumns,
}: TextProps) {
  const {setFieldValue, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
}

export default AppFormPicker;
