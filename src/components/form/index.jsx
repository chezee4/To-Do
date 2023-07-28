import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "../input";
import Chips from "../input-chips";

const validationSchema = Yup.object().shape({
  input: Yup.string().required("Required"),
});

const FormComponent = () => {
  const [chips, setChips] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({ id: Date.now(), text: values.input, chips: [...chips] });
    localStorage.setItem("data", JSON.stringify(data));
    setChips([]);
    resetForm();
  };

  const onPushData = (newChips) => {
    setChips((chips) => [...chips, newChips]);
  };

  return (
    <Formik
      initialValues={{ input: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form>
          <Field
            name="input"
            as={Input}
            value={values.input}
            onChange={(value) => setFieldValue("input", value)}
          />

          {errors.input && touched.input && <div>{errors.input}</div>}
          <Chips onPushData={onPushData} chips={chips} setChips={setChips} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
