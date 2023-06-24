// --- Individual Importing Components --- //
import Card from "./components/Card/Card";
import FirstComponent from "./components/FirstComponent/FirstComponent";

// --- Importing Components using index.js --- //
// import { FirstComponent, Card } from "./components";
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

const feedbackList = [
  {
    title: "Feedback 1",
    content: "This is my first card",
    rating: "4",
  },
  {
    title: "Feedback 2",
    content: "This is my second card",
    rating: "5",
  },
  {
    title: "Feedback 3",
    content: "This is my third card",
    rating: "3",
  },
  {
    title: "Feedback 4",
    content: "This is my fourth card",
    rating: "2",
  },
  {
    title: "Feedback 5",
    content: "This is my fifth card",
    rating: "4",
  },
];

function App() {
  const title = "This is third class";
  return (
    // -- Fragment-- //
    <>
      {/* // -- JSX -- // */}
      <h1>Hello World</h1>

      {/* // --- First Component --- // */}
      <FirstComponent
        // -- Props -- //
        title={title}
        count={1}
        lists={[1, 2, 3, 4, 5]}
        obj={{ name: "Maham", age: 20 }}
        func={() => console.log("Hello World")}
      />

      <div className="feedbacks">
        <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
        <div className="all-cards">
          {feedbackList.map((item) => (
            <Card
              title={item.title}
              content={item.content}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

/*
Module3: Components, Props & State

Creating Your First Component & Prop
Adding Styles To A Component
State & use State Hook
Managing Global State
Card Component & Conditional Styles
Events & Prop Drilling
Feedback Stats Component & Reactivity
*/
