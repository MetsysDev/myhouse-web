import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css';

function Orphanages() {
    return (
        <div id="page-map">
            <Map
                center={['-22.2184796','-49.645111']}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="/" className="btn create-orphanage">
                <FiPlus size="32" color="#fff"/>
            </Link>
        </div>
    );
}

export default Orphanages;