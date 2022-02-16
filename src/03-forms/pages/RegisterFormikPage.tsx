import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  const { errors, touched, handleSubmit, handleReset, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password1: "",
      password2: "",
    },
    onSubmit: (e) => {
      console.log(e);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password1: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
      password2: Yup.string()
        .oneOf([Yup.ref("password1"), null], "Passwords don't match!")
        .required("Required"),
    }),
  });

  return (
    <div>
      <h1>Register Formik Page</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="Name">First Name</label>
        <input type="text" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label htmlFor="email">Email address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <label htmlFor="password1">Password</label>
        <input type="password" {...getFieldProps("password1")} />
        {touched.password1 && errors.password1 && <span>{errors.password1}</span>}

        <label htmlFor="password2">Confirm Password</label>
        <input type="password" {...getFieldProps("password2")} />
        {touched.password2 && errors.password2 && <span>{errors.password2}</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
