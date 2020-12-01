import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiHome, FiPlus, FiMonitor,
    FiMap, FiCpu, FiSend, FiSettings,
    FiSliders, FiTv, FiWind
  } from 'react-icons/fi';


function Menu() {
    return(
        <aside className="menu">
            <Link to="/" className="btn">
                <FiHome size="18" color="#000"/>
            </Link>
            {/* <Link to="/home" className="btn">
                <FiMonitor size="18" color="#000"/>
            </Link> */}
            <Link to="/location" className="btn">
                <FiMap size="18" color="#000"/>
            </Link>
            <Link to="/chat" className="btn">
                <FiSend size="18" color="#000"/>
            </Link>
            {/* <Link to="/cpu" className="btn">
                <FiCpu size="18" color="#000"/>
            </Link> */}
            <Link to="/" className="btn">
                <FiSliders size="18" color="#000"/>
            </Link>
        </aside>
    );
}

export default Menu;