import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FeedbackDetails = () => {
  const { feedbackId } = useParams();

  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFeedbackDetail = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/feedbacks/${id}`);
      console.log("response", response);
      const { data } = response;
      setData(data);
    } catch (error) {
      console.log("error", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedbackDetail(feedbackId);
  }, [feedbackId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>Feedback Details</h1>
      <h4>
        Title : <span>{data?.title}</span>
      </h4>
      <h4>
        Feedback : <span>{data?.feedback}</span>
      </h4>
      <h4>
        Rating : <span>{data?.rating}</span>
      </h4>
    </>
  );
};

export default FeedbackDetails;
