import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, feedback, rating, deleteFeedback }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <h2 className="card-title">{title}</h2>

        <CardContent content={feedback} />

        <CardRating rating={rating} />

        <div className="card-all-btn">
          <button
            className="card-btn"
            onClick={() => navigate(`/feedback/${id}/edit`)}
          >
            Edit
          </button>
          <button className="card-btn" onClick={() => deleteFeedback(id)}>
            Delete
          </button>
          <Link to={`/feedback/${id}`} className="card-btn">
            View
          </Link>
        </div>
      </div>
    </>
  );
};

// Prop Drilling
const CardContent = ({ content }) => {
  return <p className="card-content">{content}</p>;
};

const CardRating = ({ rating }) => {
  return (
    <span
      className={`card-rating ${
        rating >= 4
          ? "best-feedback"
          : rating < 4 && rating > 2
          ? "good-feedback"
          : "worst-feedback"
      }`}
    >
      Rating: {rating}
    </span>
  );
};

export default Card;
