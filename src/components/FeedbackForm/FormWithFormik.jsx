import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import "./FeedbackForm.css";
import { motion } from "framer-motion";

const FormWithFormik = () => {
    

  const initialValues = {
    feedback: "",
    rating: "",
  };

  const validationSchema = Yup.object().shape({
    feedback: Yup.string()
      .required("Feedback is required")
      .min(5, "Feedback must have at least 5 characters"),
    rating: Yup.string()
      .required("Rating is required")
      .min(1, "Rating must be at least 1"),
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <motion.div
      className="feedback-container"
      initial={{ opacity: 0 }} // Initial styles
      animate={{ opacity: 1 }} // Animation styles
      transition={{ duration: 1 }} // Animation duration
    >
      <h1>Feedback</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-input">
            <label htmlFor="feedback">Enter your feedback:</label>
            <Field
              className="feedback-textarea"
              as="textarea"
              id="feedback"
              name="feedback"
              placeholder="Enter your feedback"
              rows={4}
              cols={45}
            />
            <ErrorMessage name="feedback" component="div" className="error" />
          </div>
          <div className="form-input">
            <label htmlFor="feedback-rating">Select your rating:</label> <br />
            <Field
              as="select"
              id="feedback-rating"
              className="feedback-rating"
              name="rating"
            >
              <option value="">Select</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 Star</option>
              <option value="4">4 Star</option>
              <option value="5">5 Star</option>
            </Field>
            <ErrorMessage name="rating" component="div" className="error" />
          </div>
          <Button type="submit">Submit</Button>{" "}
        </Form>
      </Formik>
    </motion.div>
  );
};

export default FormWithFormik;
