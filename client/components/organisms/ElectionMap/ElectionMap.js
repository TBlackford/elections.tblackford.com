import React from 'react';
import PropTypes from 'prop-types';

import { polygonCenter } from 'geojson-polygon-center';

import { Map as LeafletMap, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'

export default function ElectionMap(props) {
    const { data } = props;

    const getStyle = (feature, layer) => {
        return {
          color: '#006400',
          weight: 5,
          opacity: 0.65
        }
    }

    const position = [51.505, -0.09]

    console.log(data);

    return (
        <LeafletMap center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
            <GeoJSON data={data} />
      </LeafletMap>
    )
}