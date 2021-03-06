import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
  makeStyles,
} from '@material-ui/core';
import axios from 'axios';
import './register.css';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

function Register() {
  const classes = useStyles();

  const [userValue, setUser] = useState('');
  const [passwordValue, setPassword] = useState('');
  const [passwordValue2, setPassword2] = useState('');

  async function handleSubmit() {
    if (passwordValue === passwordValue2) {
      const response = await axios.post('http://localhost:3000/user/signup', { username: userValue, password: passwordValue });
      if (response.status === 201) {
        window.location = '/home';
      }
    }
  }

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
          <div className="connection-main">
            <form className="connection-form">
              <div className="connection-field">
                <p>Username : </p>
                <input type="text" id="user" name="user" required minLength="4" maxLenght="16" onChange={(event) => { setUser(event.target.value); }} />
              </div>
              <div className="connection-field">
                <p>Password : </p>
                <input type="text" id="password" name="password" required minLength="4" maxLenght="20" onChange={(event) => { setPassword(event.target.value); }} />
              </div>
              <div className="connection-field">
                <p>Check Password : </p>
                <input type="text" id="password2" name="password2" required minLength="4" maxLenght="20" onChange={(event) => { setPassword2(event.target.value); }} />
              </div>
              <Button variant="contained" color="primary" onClick={handleSubmit}> Register</Button>
            </form>
            <div>
              <Link to="/" className={classes.link}>
                <Button variant="contained" color="primary"> Connection</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right" />
      </div>
    </div>
  );
}

export default Register;
