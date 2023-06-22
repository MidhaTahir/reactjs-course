import "./card.css";

/*
 * Points to be covered:
 * 1. Ternary Operator
 * 2. Conditional Rendering and styling
 * 3. Prop Drilling
 * 4. Destructuring
 * 5. Multiple components in a single file (Card and CardContent)
 */

import React from "react";

const Card = ({ title, content, rating }) => {
  return (
    <>
      <div className={`card`}>
        <h2 className="card-title">{title}</h2>
        {/* 
        // One way to do it
        <p className="card-content">{content}</p> */}

        {/* Prop Drilling  */}
        <CardContent content={content} />

        <CardRating rating={rating} />
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
    <>
      {/*  Conditional Rendering - Styling  */}

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
    </>
  );
};

export default Card;
