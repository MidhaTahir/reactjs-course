import { Routes, Route } from "react-router-dom";
import { Home, About, Feedback } from "./pages";
import { Header } from "./components"
import FeedbackDetails from "./pages/FeedbackDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback/:feedbackId" element={<FeedbackDetails />} />
      </Routes>
    </>
  );
}

export default App;
