import {Formik} from 'formik';
import React, {ReactNode} from 'react';

export interface FormProps {
  initialValues: object;
  onSubmit: (values: object) => void;
  validationSchema: object;
  children: ReactNode;
}
const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
