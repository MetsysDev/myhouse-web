import React, { useState, useEffect } from 'react';
import {FaRegLightbulb} from 'react-icons/fa';

import socketIOClient from "socket.io-client";

const ENDPOINT = "https://myhouse-server.herokuapp.com/";

function BtnSocket(props) {
  const [response, setResponse] = useState("");

  const socket = socketIOClient(ENDPOINT);
  const [color, setColor] = useState('#000');
  const turnLight = function (props) {
    socket.emit('comand-house', {
      'comand': 'luz'
    });
  }

  useEffect(() => {
    socket.on("comand-house", data => {
      if (typeof(data) == 'object') {
        switch (data.comand) {
          case 'luz':
            setColor(color != '#000'? '#000' : '#4CAF50');
            break;
        }
        
      }
    });
  }, [color]);

  return (
    <div className="control">
        <div onClick={turnLight}>
        <FaRegLightbulb size="24" color={color}/>
        </div>
        <span>
        Luz
        </span>
    </div>
  );  
}

export default BtnSocket;