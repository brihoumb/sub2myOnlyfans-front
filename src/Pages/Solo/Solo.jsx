import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:3000');

function Solo() {
  let dead = false;
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [buttons, setButtons] = useState([]);
  let finalButtons = [];

  (() => {
    socket.emit('getEvent', '');
    socket.on('answer', (msg) => {
      const json = JSON.parse(msg);
      console.log(json);
      setText(json.text);
      setImage(json.text);
      // setButtons([]);
      setButtons(json.button);
      console.log('answer', buttons);

      finalButtons = [];
      buttons.forEach((item, i) => {
        finalButtons.push(
          <li>
            <button onClick={() => { playerClick(i); }} onKeyDown={() => { playerClick(i); }} type="button">
              {item}
            </button>
          </li>,
        );
      });
      setButtons(finalButtons);
      console.log('answer2', buttons);
    });
    socket.on('dead', (msg) => {
      const json = JSON.parse(msg);
      dead = true;
      console.log(json);
      setText(json.text);
      setImage(json.text);
      // setButtons([]);
      setButtons(json.button);
      console.log('dead', buttons);

      finalButtons = [];
      buttons.forEach((item, i) => {
        finalButtons.push(
          <li>
            <button onClick={() => { playerClick(i); }} onKeyDown={() => { playerClick(i); }} type="button">
              {item}
            </button>
          </li>,
        );
      });
      setButtons(finalButtons);
      console.log('dead2', buttons);
    });
  })();

  function playerClick(nb: number) {
    if (dead) {
      socket.disconnect();
      window.location = '/home';
    } else {
      socket.emit('replyEvent', nb);
      socket.emit('getEvent', '');
    }
  }

  return (
    <div id="page">
      <div className="top-menu">
        <h2 className="subtitle">{text}</h2>
      </div>
      <div className="middle-game tabs">
        <div className="left" />
        <div className="menu middle">
          <img src={{ uri: `data:image/gif;base64,${image}` }} alt="img" />
        </div>
        <div className="right" />
      </div>
      <div className="bottom-game">
        <ul>
          {buttons}
        </ul>
      </div>
    </div>
  );
}

export default Solo;
