import React from "react";

import data from "../../data.json";
import { MainappCard } from "../../components";

import "./ChallengeList.css";

function ChallengeList() {
  return (
    <>
      <h1 className="mainapp-header">List of Challenges</h1>
      <div className="mainapp-list">
        {data.challenges.map((challenge) => (
          <MainappCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </>
  );
}

export default ChallengeList;
