import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from '../common';

interface ErrorMessageProps {
  error: string | string[] | undefined;
  visible: boolean | undefined;
}

const ErrorMessage = ({error, visible}: ErrorMessageProps) => {
  if (!visible || !error) {
    return null;
  }

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {color: 'red'},
});

export default ErrorMessage;
