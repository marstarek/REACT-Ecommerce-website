import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import FormikField from "./FormikField";
import "./Formstyl.css";
const Formic = () => {
  //initialValues
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "",
  };
  //onSubmit
  const onSubmit = (values) => window.alert("you are login successfully");
  //validationSchema
  const validationSchema = yup.object({
    username: yup
      .string()
      .min(8)
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required(),
    email: yup.string().email().required("Please enter your Email"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords don't match."),
    active: yup.bool().oneOf([true], " please tell us  are you active "),
    gender: yup.string().required("Please select your gender"),
  });

  return (
    <div className="containerx  ">
      <h3> Login </h3>
      <div className="cardx mx-auto text-center">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form>
                {/* start of form */}
                <FormikField label="User Name" name="username" type="text" />
                <FormikField label="Email" name="email" type="text" />
                <FormikField label="Password" name="password" type="password" />
                <FormikField
                  label="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                <FormikField label="active" name="active" type="checkbox" />
                {/* end of reuse components*/}
                {/* gender  */}
                <Field name="gender">
                  {(formikField) => {
                    return (
                      <>
                        <div className="inputx">
                          <label htmlFor="gender">Gender</label>
                          <br />
                          <select id="gender" {...formikField.field}>
                            <option value="" label="Choose  gender" />
                            <option value="male" label="Male" />
                            <option value="female" label="Female" />
                          </select>
                          <ErrorMessage name="gender">
                            {(errMessage) => {
                              return (
                                <div style={{ color: "red" }}>{errMessage}</div>
                              );
                            }}
                          </ErrorMessage>
                        </div>
                      </>
                    );
                  }}
                </Field>
                {/* end of  gender input */}

                {/* submite */}
                <button
                  type="button "
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn btn-success btn-lg my-5 px-4"
                >
                  login
                </button>
                {/* end of form */}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Formic;
//  gender: "",  // required (drop down) done
//   hoppies: [""], // (field array)
