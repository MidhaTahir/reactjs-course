import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { FormContext } from "../context/FormContext";

const FeedbackDetails = () => {
    const { feedbackId } = useParams();
    const { getSingleCardData  } = useContext(FormContext);

    const singleCardData = getSingleCardData(feedbackId);

  return (
    <>
    <h1>Feedback Details</h1>
    <h4>Title : <span>{singleCardData?.title}</span></h4>
    <h4>Feedback : <span>{singleCardData?.feedback}</span></h4>
    <h4>Rating : <span>{singleCardData?.rating}</span></h4>
    </>
  )
}

export default FeedbackDetails