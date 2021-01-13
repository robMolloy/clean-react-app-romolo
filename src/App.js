import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBars from "./components/generic/navigation/NavBars";
import AllRoutes from "./components/generic/navigation/AllRoutes";

function App() {
  const Index = Home;

  return (
    <Router basename={`${process.env.REACT_APP_PUBLIC_PATH ?? ""}`}>
      <div className="App">
        <NavBars imgSrc="logo.svg" />
        <main>
          <Route exact path="/" component={Index} />
          <AllRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
