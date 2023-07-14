import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components";

const Feedbacks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/feedbacks");
      setData(response?.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const deleteFeedback = async (feedbackId) => {
    const confimation = window.confirm("Are you sure you want to delete?");
    if (!confimation) return;
    try {
      const response = await axios.delete(
        `http://localhost:8000/feedbacks/${feedbackId}`
      );
      console.log("response", response);
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <Link to="/feedback/add" className="link-style">
        Add new feedback
      </Link>
      <div className="all-cards">
        {data?.length === 0 ? (
          <h1>No Feedbacks</h1>
        ) : (
          data?.map((input) => {
            return (
              <Card
                key={input.id}
                id={input.id}
                title={input.title}
                feedback={input.feedback}
                rating={input.rating}
                deleteFeedback={deleteFeedback}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Feedbacks;
