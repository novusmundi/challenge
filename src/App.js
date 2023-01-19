import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ExplorePublications from "./components/ExplorePublications";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
