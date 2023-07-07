import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { Home, About,Feedback } from "../pages";

const Configuration = () => {
  return (
    <>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    
    </>
  );
};

export default Configuration;
