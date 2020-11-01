import React from 'react';
import {
  Link,
} from 'react-router-dom';
import MultiScore from '../../Box/MultiScoreBoard/MultiScoreBoard';
import LeaderScore from '../../Box/LeaderBoard/LeaderBoard';

function Multi() {
  return (
    <div id="page">
      <div className="top-game" />
      <div className="middle-game tabs">
        <div className="left">
          <MultiScore />
        </div>
        <div className="menu middle">
          <Link to="/"> Home</Link>
        </div>
        <div className="right">
          <LeaderScore />
        </div>
      </div>
      <div className="bottom-game" />
    </div>
  );
}

export default Multi;
