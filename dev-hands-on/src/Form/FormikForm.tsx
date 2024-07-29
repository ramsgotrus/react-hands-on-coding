import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "Yup";

const validateSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be atleast 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const FormikForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validateSchema}
      onSubmit={() => {
        alert("submitted");
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
