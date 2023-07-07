import React, { useState } from "react";
import Button from "../Button/Button";
import "./FeedbackForm.css";
import { motion } from "framer-motion";
const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState(false);
  const [selectedRating, setSelectedRating] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFeedbackText(value);
  };

  const handleRatingSelect = (event) => {
    const { value } = event.target;
    setSelectedRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedbackText.trim())
    if (feedbackText.trim() === "" || selectedRating === "") {
      alert("Please complete the form before submitting");
    } else {
      setSubmittedFeedback(true);
      setFeedbackText("");
      setSelectedRating("");
      console.log(`Feedback: ${feedbackText}`);
      console.log(`Rating: ${selectedRating}`);
    }
  };

  return (
    <motion.div
      className="feedback-container"
      initial={{ opacity: 0 }}  // Initial styles
      animate={{ opacity: 1 }}  // Animation styles
      transition={{ duration: 1 }}  // Animation duration
    >
      {" "}
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="feedback-textarea">Enter your feedback:</label>
          <textarea
            id="feedback-textarea"
            className="feedback-textarea"
            value={feedbackText}
            onChange={handleInputChange}
            placeholder="Enter your feedback"
            rows={4}
            cols={45}
          />
        </div>

        <div className="form-input">
        <label htmlFor="feedback-rating">Select your rating:</label>
          <select
            id="feedback-rating"
            className="feedback-rating"
            name="selectedRating"
            value={selectedRating}
            onChange={handleRatingSelect}
          >
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select>
          
        </div>

        <Button type="submit">Submit</Button>
      </form>
      {submittedFeedback && (
        <div className="confirmation-container">
          <h2>Thank you for your feedback!</h2>
        </div>
      )}
    </motion.div>
  );
};

export default FeedbackForm;


