import React, { useContext } from "react";
import { Card } from "../../components";
import { FormContext } from '../../context/FormContext';
import "./feedback.css";
const Feedbacks = () => {
  const { formInputs } = useContext(FormContext);
console.log(formInputs);
  return (
    <>
      <div className="all-cards">
       
        {
          formInputs.length === 0 ? <h1 style={{textAlign:"center",color:"red"}}>No Feedbacks</h1> : 
          formInputs.map((input) => {
            return (
              <Card
                key={input.id}
                title={input.title}
                content={input.feedback}
                rating={input.rating}
              />
            );
          })
        }
        
      </div>
    </>
  );
};

export default Feedbacks;
