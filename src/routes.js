import React from 'react';
import Menu from './components/menu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from 'react-router-dom';

import Cpu from './pages/cpu'
import Home from './pages/home'
import Chat from './pages/chat'
import ControlsHouse from './pages/controls-house'
import LocationHouse from './pages/location-house'

function Routes() {
    return(
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/cpu" exact component={Cpu} />
                <Route path="/chat" exact component={Chat} />
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={ControlsHouse} />
                <Route path="/location" component={LocationHouse} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;