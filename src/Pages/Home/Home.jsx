import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
  makeStyles,
} from '@material-ui/core';
import './home.css';
import MultiScore from '../../Box/MultiScoreBoard/MultiScoreBoard';
import Score from '../../Box/ScoreBoard/ScoreBoard';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div id="page">
      <div className="top-menu">
        <h1 className="title">Don&#39;t Be Rude !</h1>
        <h2 className="subtitle">Welcome stranger, here is the begining of your story.</h2>
        <h2 className="subtitle">But never, don&#39;t be rude !</h2>
      </div>
      <div className="bottom-menu tabs">
        <div className="left">
          <MultiScore />
        </div>
        <div className="menu middle">
          <div>
            <Button variant="contained" color="primary"> Connection</Button>
          </div>
          <Link to="/solo" className={classes.link}>
            <Button variant="contained" color="primary"> Solo-player</Button>
          </Link>
          <Link to="/multi" className={classes.link}>
            <Button variant="contained" color="primary"> Multi-player</Button>
          </Link>
        </div>
        <div className="right">
          <Score />
        </div>
      </div>
    </div>
  );
}

export default Home;
