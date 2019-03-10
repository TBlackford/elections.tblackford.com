import React from 'react';
import PropTypes from 'prop-types';

import { Map as LeafletMap, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'

import { geoAlbersUsa, geoMercator, geoPath } from 'd3-geo';
import { selectAll, select, event } from 'd3-selection';

import geojson2svg, { Renderer } from 'geojson-to-svg';


export default function ElectionMap(props) {
    const { data, mapType, election, electorates } = props;

    if(!data) {
        return (<div />)
    }

    const getMapColour = (type) => {
        switch(type) {
            case "Territory": return "#808080";
            case "Disputed Territory": return "#4d402a";
        }

        return "#e4e4e4";
    }

    const projection = geoAlbersUsa()
    const pathGenerator = geoPath().projection(projection)
    const countries = data.features
        .map((d,i) => {
            console.log(d.properties.LABEL)
            const electorate = electorates[d.properties.LABEL];

            if(electorate.totals.length != 0) {
                var colour = electorate.totals[0].colour;
            } else {
                if(electorate.type.electorate == "State") {
                    // Assume that they did not vote
                    var colour = "#404040"
                } else {
                    var colour = getMapColour(electorate.type.electorate);
                }
            }
            
            return (
                <path
                    key={'path' + i}
                    d={pathGenerator(d)}
                    fill={colour}
                    className='countries'
                />
            );
        })

   return (
        <svg width="100%" height="100%" viewBox="0 0 959 593">
                {countries}
        </svg>
   )

    return (
        <LeafletMap center={[41, -87]} zoom={5}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <GeoJSON data={data} />
      </LeafletMap>
    )
}