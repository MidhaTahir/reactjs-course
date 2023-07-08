import { Routes, Route } from "react-router-dom";
import { Home, About, Feedback, FeedbackDetails } from "./pages";
import { Header } from "./components"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="feedback/:feedbackId" element={<FeedbackDetails />} />
      </Routes>
    </>
  );
}

export default App;
