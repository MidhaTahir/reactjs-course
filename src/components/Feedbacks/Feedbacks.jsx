import React, { useContext } from "react";
import { Card } from "..";
import { FormContext } from '../../context/FormContext';
import "./Feedback.css";

const Feedbacks = () => {
  const { formInputs } = useContext(FormContext);
  return (
    <>
      <div className="all-cards">
       
        {
          formInputs.length === 0 ? <h1 style={{textAlign:"center",color:"red"}}>No Feedbacks</h1> : 
          formInputs.map((input,index) => {
            return (
              <Card
              index={index}
                key={index}
                title={input.title}
                feedback={input.feedback}
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
