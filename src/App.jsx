// --- Individual Importing Components --- //
// import Card from "./components/Card/Card";
// import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

// --- Importing Components using index.js --- //
import { Card,FeedbackForm } from "./components";
import "./App.css";


function App() {
  return (
    <>
    {/* <Feedback/> */}
    <FeedbackForm />
      <div className="feedbacks">
        <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
        <div className="all-cards">
          <Card
            title={"Feeback 1"}
            content={"This is my first card"}
            rating={5}
            maham={true}
          />
          <Card
            title={"Feeback 2"}
            content={"This is my first card"}
            rating={4}
          />
          <Card
            title={"Feeback 3"}
            content={"This is my first card"}
            rating={3}
          />
          <Card
            title={"Feeback 4"}
            content={"This is my first card"}
            rating={3}
          />
          <Card
            title={"Feeback 5"}
            content={"This is my first card"}
            rating={1}
          />
        </div>
      </div>
    </>
  );
}

export default App;
