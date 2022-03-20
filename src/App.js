import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdviceGenerator, ChallengeList } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/frontendmentor-challenges" element={<ChallengeList />} />
        <Route
          path="/frontendmentor-challenges/advice-generator"
          element={<AdviceGenerator />}
        />
      </Routes>
    </Router>
  );
}

export default App;
