import React from 'react'
import './home.css';
import MultiScore from '../../Box/MultiScoreBoard/multiScoreBoard';
import Score from '../../Box/ScoreBoard/scoreBoard';

import {
  Link
} from "react-router-dom"

import {
  Button,
  makeStyles
}  from '@material-ui/core'

const useStyles = makeStyles ({
  link: {
    textDecoration: 'none',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div id="page">
      <div class="top-menu">
		    <h1 class="title">Don't Be Rude !</h1>
		    <h2 class="subtitle">Welcome stranger, here is the begining of your story.</h2>
		    <h2 class="subtitle">But never, don't be rude !</h2>
      </div>
      <div class="bottom-menu tabs">
        <div class="left">
          {MultiScore()}
        </div>
        <div class="menu middle">
          <div><Button variant="contained" color="primary"> Connection</Button></div>
          <Link to="/solo" className={classes.link}><Button variant="contained" color="primary"> Solo-player</Button></Link>
          <Link to="/multi" className={classes.link}><Button variant="contained" color="primary"> Multi-player</Button></Link>
        </div>
        <div class="right">
          {Score()}
        </div>
      </div>
    </div>
  );
}

export default Home;
