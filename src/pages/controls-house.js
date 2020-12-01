import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import socketIOClient from "socket.io-client";

import {FiPlus, FiSend, FiTv, FiWind} from 'react-icons/fi';
import {FaRegLightbulb} from 'react-icons/fa';

import BtnSocket from '../components/btn-socketio'

import '../styles/pages/controls-house.css';

function Controls() {
  return (
    <aside id="container-controls">
      <BtnSocket/>

      <div className="control">
        <Link to='/home'>
          <FiWind size="24" color="#000"/>
        </Link>
        <span>
          Ventilação
        </span>
      </div>
      <div className="control">
          <Link>
            <FiTv size="24" color="#000"/>
          </Link>
          <span>
            Tv
          </span>
      </div>
      <div className="control">
        <Link>
          <FiSend size="24" color="#000"/>
        </Link>
        <span>
          Chat
        </span>
      </div>
      <div className="control">
        <FiPlus size="24" color="#000"/>
      </div>
    </aside>
  );
}

export default Controls;