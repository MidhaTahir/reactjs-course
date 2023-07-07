import { Switch, Route } from "react-router-dom";
import { About, Feedback, Home } from "./pages";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </>
  );
}

/*In the above example, the exact prop is applied to the first Route component with the path set to "/". This means that the Home component will only be rendered if the current URL matches exactly with "/" and not any other paths that start with "/", such as "/about".

Without the exact prop, the Home component would be rendered for any path that starts with "/". For instance, without exact, the Home component would also render for the path "/about", resulting in unexpected behavior.
*/

export default App;
