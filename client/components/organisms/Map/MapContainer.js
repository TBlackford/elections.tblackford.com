import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'

import Map from './Map';

export default class MapContainer extends Component {
    static propTypes = {
        getMap: PropTypes.func.isRequired,
        country: PropTypes.any,
        map: PropTypes.any,
    }

    componentDidMount() {
        
    }

    data = () => {

    }

    render() {
        return (
            <Map />
        )
    }
}