import React from "react";
import { ErrorMessage } from "formik";

const Error = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return <div style={{ color: "red" }}>{errMessage}</div>;
      }}
    </ErrorMessage>
  );
};

export default Error;
