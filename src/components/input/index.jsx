import React from 'react';
import { useField } from 'formik';
import  { InputText}   from "./styles.jsx";
const Input = (props) => {

  const [field, meta] = useField(props);
  return (
    <>
     {meta.error && meta.touched && <div style={{color: "#c43a3e"}}>{meta.error}</div>}
      <InputText
        autoComplete="off"
        placeholder="Type something"
        {...field}
        {...props}
      />
   </>
  );
};

export default Input;

