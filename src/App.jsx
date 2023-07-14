import { Routes, Route } from "react-router-dom";
import { Feedback, FeedbackDetails, Feedbacks } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feedbacks />} />
        <Route path="/feedback/add" element={<Feedback />} />
        <Route path="feedback/:feedbackId" element={<FeedbackDetails />} />
        <Route path="/feedback/:feedbackId/edit" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;
