import React from "react";
import { useFormik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    onSubmit: (values) => window.alert("you are login successfully"),
    validationSchema: yup.object({
      email: yup.string().required().email("invalid email!"),
      password: yup.string().required("password is requierd!"),
    }),
  });
  return (
    <div className="container">
      <h3> Login </h3>
      <div className="counter_card mx-auto text-center">
        <form onSubmit={formik.handleSubmit}>
          <div class="input-group my-3 w-75 mx-auto">
            <span class="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control  "
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // == {...formik.getFieldProps(name)}
            />
          </div>

          {formik.touched.email && formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
          {/* password */}

          <div class="input-group my-3 w-75 mx-auto">
            <span class="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control  "
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              {...formik.getFieldProps("password")}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
          {/* check btn */}
          <div class="check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              name="rememberMe"
              id="rememberMe"
              {...formik.getFieldProps("rememberMe")}
            />
            <label class="form-check-label" for="flexCheckDefault">
              rememberMe
            </label>
          </div>
          <div className="">
            {" "}
            I Dont Have Account
            <Link to="/Registr" className="nav-link active" aria-current="page">
              Registration
            </Link>
          </div>
          <button
            type="button "
            disabled={!(formik.isValid && formik.dirty)}
            className="btn btn-success btn-lg my-5 px-4"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
