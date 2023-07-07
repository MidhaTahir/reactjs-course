import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FormProvider } from "./context/FormContext";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <App />
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
