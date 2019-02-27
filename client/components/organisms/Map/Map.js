import React from 'react';
import PropTypes from 'prop-types';

import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'

export default function Map(props) {

    return (
        <Map zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
            <GeoJSON data={} />
        </Map>
    )
}