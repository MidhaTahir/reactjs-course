import React, { useContext } from "react";
import "./card.css";
import { motion } from "framer-motion";
import { FormContext } from "../../context/FormContext";

const Card = ({ index,title, feedback, rating }) => {
  const { getCardData } = useContext(FormContext);

  const handleContentEdit = () => {
    getCardData(true,index,{ title, feedback, rating });
  };

  

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
          <button className="card-btn" onClick={handleContentEdit}>
            Edit
          </button>
         
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
