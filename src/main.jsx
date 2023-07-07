import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
        <FormProvider>
        <App />
        </FormProvider>
      </BrowserRouter>
  </React.StrictMode>
);
