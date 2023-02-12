import {Formik} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {Screen} from '../Components/common';
import {AppFormField, FormPicker, SubmitButton} from '../Components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({errors, touched}) => (
          <>
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
