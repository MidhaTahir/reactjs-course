import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState([]);

  const addFormInput = (input) => {
    setFormInputs([...formInputs, input]);
  };

  return (
    <FormContext.Provider value={{ formInputs, addFormInput }}>
      {children}
    </FormContext.Provider>
  );
};
