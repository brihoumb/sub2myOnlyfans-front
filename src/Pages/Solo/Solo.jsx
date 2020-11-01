import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Score from '../../Box/ScoreBoard/ScoreBoard';

function Solo() {
  return (
    <div id="page">
      <div className="top-game" />
      <div className="middle-game tabs">
        <div className="left" />
        <div className="menu middle">
          <Link to="/">Home</Link>
        </div>
        <div className="right">
          <Score />
        </div>
      </div>
      <div className="bottom-game" />
    </div>
  );
}

export default Solo;
