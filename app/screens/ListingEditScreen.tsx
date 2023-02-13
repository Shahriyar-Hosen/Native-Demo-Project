import {Formik} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../Components/CategoryPickerItem';

import {Screen} from '../Components/common';
import {AppFormField, FormPicker, SubmitButton} from '../Components/forms';
import FormImagePicker from '../Components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

export interface ListingEditProps {
  title: string;
  price: string;
  description: string;
  images: string[];
  category:
    | null
    | {
        backgroundColor: string;
        icon: string;
        label: string;
        value: number;
      }[];
}

const initialValues: ListingEditProps = {
  title: '',
  price: '',
  description: '',
  category: null,
  images: [],
};

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({errors, touched}) => (
          <>
            <FormImagePicker
              name="images"
              error={errors.images}
              visible={touched.images}
            />

            <AppFormField
              maxLength={255}
              name="title"
              placeholder="Title"
              error={errors.title}
              visible={touched.title}
            />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
              error={errors.price}
              visible={touched.price}
              width={120}
            />
            <FormPicker
              items={categories}
              name="category"
              placeholder="Category"
              error={errors.category}
              visible={touched.category}
              width="50%"
              PickerItemComponent={CategoryPickerItem}
              numberOfColumns={3}
            />
            <AppFormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
              error={errors.description}
              visible={touched.description}
            />
            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
