import React from "react";
import { FormWithFormikContextApi } from "../components";
import { Feedbacks } from "../container/index";

const Feedback = () => {
  return (
    <>
      <FormWithFormikContextApi />

      <div className="feedbacks">
        <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
        <Feedbacks />
      </div>
    </>
  );
};

export default Feedback;
