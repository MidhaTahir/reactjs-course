import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState([]);
  const [cardData, setCardData] = useState({});
  const [cardIndex, setCardIndex] = useState(null);
  const [IsEdit, setIsEdit] = useState(false);

  
  const addFormInput = (input) => {
    setFormInputs([...formInputs, input]);
  };



  return (
    <FormContext.Provider
      value={{
        formInputs,
        addFormInput,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
