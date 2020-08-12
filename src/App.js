import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./components/Game";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/clicky-game" component={Game} />
      </div>
    </Router>
  );
}

export default App;
