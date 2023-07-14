import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddFeedbackForm, EditFeedbackForm } from "../components";

const Feedback = () => {
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isEdit ? <h1>Edit Feedback</h1> : <h1>Add Feedback</h1>}

      {isEdit ? <EditFeedbackForm /> : <AddFeedbackForm />}

      <Link to="/" className="link-style">
        Get all feedbacks
      </Link>
    </div>
  );
};

export default Feedback;
