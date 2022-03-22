import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdviceGenerator, ChallengeList, SunnyLandingpage } from "./pages";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/frontendmentor-challenges" element={<ChallengeList />} />
        <Route
          path="/frontendmentor-challenges/sunnyside-agency"
          element={<SunnyLandingpage />}
        />
        <Route
          path="/frontendmentor-challenges/advice-generator"
          element={<AdviceGenerator />}
        />
      </Routes>
    </Router>
  );
}

export default App;
