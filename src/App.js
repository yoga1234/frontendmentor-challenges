import React from "react";

import data from "./data.json";
import MainappCard from "./components/MainappCard";
import "./App.css";

function App() {
  return (
    <div className="mainapp-container">
      <h1>List of Challenges</h1>
      <div className="mainapp-list">
        {data.challenges.map((challenge) => (
          <MainappCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}

export default App;
