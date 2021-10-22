import React from "react";
import { Field } from "formik";
import Error from "./Error";
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <div class=" inpot my-2 w-100  mx-auto">
              <label htmlFor={name}>{label}</label>
              <br></br>
              <input
                type={type}
                id={name}
                {...formikField.field}
                defaultChecked={formikField.field.value}
              />
              <Error name={name} />
            </div>
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
