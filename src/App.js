import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdviceGenerator, ChallengeList } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChallengeList />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />1
      </Routes>
    </Router>
  );
}

export default App;
