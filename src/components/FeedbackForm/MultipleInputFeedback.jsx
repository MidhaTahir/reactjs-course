import React, { useState } from "react";
import Button from "../Button/Button";
import "./Feedback.css";

const MultipleInputFeedback = () => {
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const [formData, setFormData] = useState({
    feedbackText: "",
    selectedRating: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedFeedback(true);
    setFormData({
      feedbackText: "",
      selectedRating: "",
    });
    console.log(`Feedback: ${formData.feedbackText}`);
    console.log(`Rating: ${formData.selectedRating}`);
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="feedback-textarea">Enter your feedback:</label>
          <textarea
            className="feedback-textarea"
            name="feedbackText"
            value={formData.feedbackText}
            onChange={handleInputChange}
            placeholder="Enter your feedback"
            rows={4}
            cols={50}
          />
        </div>

        <div className="form-input">
          <label htmlFor="feedback-rating">Select your rating:</label>
          <select
            id="feedback-rating"
            className="feedback-rating"
            name="selectedRating"
            value={formData.selectedRating}
            onChange={handleInputChange}
          >
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5" defaultChecked>
              5 Star
            </option>
          </select>
        </div>

        <Button type="submit">Submit</Button>
      </form>
      {submittedFeedback && (
        <div className="confirmation-container">
          <h2>Thank you for your feedback:</h2>
        </div>
      )}
    </div>
  );
};

export default MultipleInputFeedback;
