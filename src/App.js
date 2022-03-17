import React from "react";

import MainappCard from "./components/MainappCard";
import "./App.css";

function App() {
  return (
    <div className="mainapp-container">
      <h1>List of Challenges</h1>
      <div className="mainapp-list">
        <MainappCard />
        <MainappCard />
        <MainappCard />
        <MainappCard />
      </div>
    </div>
  );
}

export default App;
