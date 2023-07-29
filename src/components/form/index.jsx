import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import Input from "../input";
import InputChips from "../input-chips";
import "./styles.scss";

const validationSchema = Yup.object().shape({
  input: Yup.string()
    .max(70, "Max 70 symbol")
    .required("This is input is Required"),
});

const FormComponent = ({ data, setData }) => {
  const [chips, setChips] = useState([]);
// eslint-disable-next-line
  useEffect(() => setData(JSON.parse(localStorage.getItem("data")) || []), []);

  const onPushData = (newChips) => {
    setChips((chips) => [...chips, newChips]);
  };

  return (
    <Formik
      initialValues={{ input: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newData = { id: uuidv4(), isChecked:false, text: values.input, chips: [...chips] };
        setData((data) => [...data, newData]);
        localStorage.setItem("data", JSON.stringify([...data, newData]));
        setChips([]);
        resetForm();
      }}
    >
      {(props) => (
        <Form className="FormToDo" >
          
          <Input name="input" type="text" autoComplete="false" />
          <InputChips
            autoComplete="off"
            onPushData={onPushData}
            chips={chips}
            setChips={setChips}
          />
          <button style={{ display: "none" }} type="Submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
