import React from 'react'
import MultiScore from '../../Box/MultiScoreBoard/multiScoreBoard';
import LeaderScore from '../../Box/LeaderBoard/leaderBoard';

import {
  Link
} from "react-router-dom"

function Multi() {
  return (
    <div id="page">
      <div class="top-game">
      </div>
      <div class="middle-game tabs">
        <div class="left">
          {MultiScore()}
        </div>
        <div class="menu middle">
          <Link to="/"> Home</Link>
        </div>
        <div class="right">
          {LeaderScore()}
        </div>
      </div>
      <div class="bottom-game">
      </div>
    </div>
  );
}

export default Multi;
