import {Formik} from 'formik';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import AppFormField from '../Components/AppFormField';
import Screen from '../Components/Screen';
import SubmitButton from '../Components/SubmitButton';

interface LoginFormProps {
  email: string;
  password: string;
}

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const initialValues: LoginFormProps = {
    email: '',
    password: '',
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={initialValues}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={values => console.log(values)}>
        {({errors, touched}) => (
          <>
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
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '2.5%',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
});

export default LoginScreen;
