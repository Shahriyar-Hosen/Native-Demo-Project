import {Formik} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {Screen} from '../Components/common';
import {AppFormField, SubmitButton} from '../Components/forms';

interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
}

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const initialValues: RegisterFormProps = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={values => console.log(values)}>
        {({errors, touched}) => (
          <>
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="name"
              placeholder="Name"
              error={errors.name}
              visible={touched.name}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
              error={errors.email}
              visible={touched.email}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              error={errors.password}
              visible={touched.password}
            />
            <SubmitButton title="Register" />
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

export default RegisterScreen;
