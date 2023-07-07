import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const FeedbackDetails = () => {
  const { feedbackId } = useParams();

  return (
    <>
      <h1>Feedback Details</h1>
      <h4>{feedbackId}</h4>
    </>
  );
};

export default FeedbackDetails;
