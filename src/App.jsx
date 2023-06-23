// --- Importing Components using index.js --- //
import { Card,FeedbackForm,FormWithFormik,FormWithFormikContextApi } from "./components";
import "./App.css";
import Feedbacks from "./container/Feedbacks/Feedbacks";
import { FormProvider } from './context/FormContext';


function App() {
  return (
    <>
     <FormProvider>
      <FormWithFormikContextApi/>
    {/* <FormWithFormik/> */}
    {/* <FeedbackForm /> */}
      <div className="feedbacks">
        <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
       <Feedbacks/>
      </div>
      </FormProvider>
    </>
  );
}

export default App;

/*
Form Input & State
Custom Button Component
Real-Time Validation
Rating Select Component
Add Feedback
Fade Animation With Framer Motion

*/