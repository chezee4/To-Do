import React, { useState, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import Input from "../input";
import InputChips from "../input-chips";
import { DataContext } from "../../context";

import "./styles.scss";

const validationSchema = Yup.object().shape({
  input: Yup.string()
    .required("This is input is Required"),
});

const FormComponent = () => {
  
  const [chips, setChips] = useState([{ id: uuidv4(), value: "test"}]);
  const {setData } = useContext(DataContext);


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
        setChips([]);
        resetForm();
      }}
    >
      {(props) => (
        <Form className="FormToDo" >
          <div style={{position: "relative"}}>
              <Input name="input" type="text" autoComplete="false" />
              <button className= "submitButton" type="Submit">
                {">"}
              </button>
          </div>
          <InputChips
            autoComplete="off"
            onPushData={onPushData}
            chips={chips}
            setChips={setChips}
          />
          
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
