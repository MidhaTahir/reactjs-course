import React, { useContext } from "react";
import "./card.css";
import { motion } from "framer-motion";
import { FormContext } from "../../context/FormContext";
import { NavLink } from "react-router-dom";


const Card = ({ id, title, feedback, rating }) => {
  const { getCardData, deleteFeedback} = useContext(FormContext);

  return (
    <>
      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="card-title">{title}</h2>

        <CardContent content={feedback} />

        <CardRating rating={rating} />
        <div className="card-all-btn">
          <button className="card-btn" onClick={()=>getCardData(true, id, { title, feedback, rating })}>
            Edit
          </button>
          <button className="card-btn" onClick={()=>deleteFeedback(id)}>
            Delete
          </button>
          <NavLink to={`/feedback/${id}`} className="card-btn">
            View
          </NavLink>
        </div>
      </motion.div>
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
