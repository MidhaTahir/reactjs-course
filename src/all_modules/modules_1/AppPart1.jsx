// --- Individual Importing Components --- //
// import Card from "./components/Card/Card";
// import Feedback from "./components/Feedback/Feedback";
// import FirstComponent from "./components/FirstComponent/FirstComponent";

// --- Importing Components using index.js --- //
import { FeedbackForm , Card } from "./components";
import "./App.css";

/*
 * Points to be covered:
 * 1. JSX (JavaScript XML)
 * 2. Component
 * 3. Fragment
 * 4. Import/Export
 * 5. Props
 */

// -- Parent Component -- //

function App() {
  return (
    // -- Fragment-- //
    // <>
    //   {/* // -- JSX -- // */}
    //   <h1>Hello World</h1>

    //   {/* // --- First Component --- // */}
    //   {/* <FirstComponent
    //     // -- Props -- //
    //     title={"This is my first React Component"}
    //   /> */}

    //   <Card title={"Card 1"} content={"This is my first card"} rating={true} />
    //   <Card title={"Card 2"} content={"This is my second card"} rating={false} />
    // </>

    <>
      <FeedbackForm />
      <div className="feedbacks">
        <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
        <div className="all-cards">
          <Card
            title={"Feeback 1"}
            content={"This is my first card"}
            rating={5}
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
