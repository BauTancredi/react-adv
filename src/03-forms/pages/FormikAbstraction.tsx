import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
          lastName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          terms: Yup.boolean().oneOf([true], "Must accept terms and conditions"),
          jobType: Yup.string().notOneOf(["designer"], "This option is not valid").required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" type="text" placeholder="Bautista" />

            <MyTextInput label="Last Name" name="lastName" type="text" placeholder="Tancredi" />

            <MyTextInput label="Email address" name="email" type="email" placeholder="john@google.com" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
