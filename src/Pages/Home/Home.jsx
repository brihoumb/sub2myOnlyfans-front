import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
  makeStyles,
} from '@material-ui/core';
import './home.css';
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
        <div className="left" />
        <div className="menu middle">
          <Link to="/solo" className={classes.link}>
            <Button variant="contained" color="primary"> Play</Button>
          </Link>
          <Link to="/" className={classes.link}>
            <Button variant="contained" color="primary"> Disconnect</Button>
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
