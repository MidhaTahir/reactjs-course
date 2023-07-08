import React from 'react'
import { useParams } from "react-router-dom";

const FeedbackDetails = () => {
  const { feedbackId } = useParams();

  return (
    <div>
        <h1>Feedback Details</h1>
        <h4>We are on Feedback: {feedbackId}</h4>
    </div>
  )
}

export default FeedbackDetails