import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState([]);
  const [cardData, setCardData] = useState({});
  const [cardIndex, setCardIndex] = useState(null);
  const [IsEdit, setIsEdit] = useState(false);
  
  const addFormInput = (input) => {
    setFormInputs((prev) => ([...prev, input]));
  };

  const getCardData = (isedit, index, input) => {
    setCardData(input);
    setCardIndex(index);
    setIsEdit(isedit);
  };

  const editFormInput = (input) => {
    setFormInputs((prevFormInputs) => {
      const updatedFormInputs = [...prevFormInputs];
      updatedFormInputs[cardIndex] = input;
      return updatedFormInputs;
    });
    setIsEdit(false);
  };

  const getSingleCardData = (index) => {
    return formInputs[index];
  }

  return (
    <FormContext.Provider
      value={{
        formInputs,
        addFormInput,
        getCardData,
        cardData,
        editFormInput,
        IsEdit,
        getSingleCardData 
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
