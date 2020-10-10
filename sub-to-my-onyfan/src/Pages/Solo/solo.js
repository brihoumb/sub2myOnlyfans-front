import React from 'react'
import Score from '../../Box/ScoreBoard/scoreBoard';

import {
  Link
} from "react-router-dom"

function Solo() {
  return (
    <div id="page">
      <div class="top-game">
      </div>
      <div class="middle-game tabs">
        <div class="left">
        </div>
        <div class="menu middle">
          <Link to="/"> Home</Link>
        </div>
        <div class="right">
          {Score()}
        </div>
      </div>
      <div class="bottom-game">
      </div>
    </div>
  );
}

export default Solo;
