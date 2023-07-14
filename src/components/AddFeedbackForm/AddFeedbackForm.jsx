import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./AddFeedbackForm.css";
import axios from "axios";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  feedback: Yup.string()
    .required("Feedback is required")
    .min(5, "Feedback must have at least 5 characters"),
  rating: Yup.string()
    .required("Rating is required")
    .min(1, "Rating must be at least 1"),
});

const FeedbackForm = () => {
  const initialValues = {
    title: "",
    feedback: "",
    rating: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    // Handle form submission

    //add new feedback
    try {
      const response = await axios.post(
        "http://localhost:8000/feedbacks",
        values
      );
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }

    resetForm();
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-input">
            <label>Enter your Feedback Title:</label>
            <Field
              name="title"
              className="feedback-title"
              as="input"
              placeholder="Enter your Feedback Title"
            />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="form-input">
            <label>Enter your feedback:</label>
            <Field
              name="feedback"
              className="feedback-textarea"
              as="textarea"
              placeholder="Enter your feedback"
              rows={4}
              cols={45}
            />
            <ErrorMessage name="feedback" component="div" className="error" />
          </div>
          <div className="form-input">
            <label>Select your rating:</label>
            <Field name="rating" as="select" className="feedback-rating">
              <option value="">Select</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </Field>
            <ErrorMessage name="rating" component="div" className="error" />
          </div>
          <button type="submit" className="btn-submit">
            Add Feedback
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
