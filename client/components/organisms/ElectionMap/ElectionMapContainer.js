import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ElectionMap from './ElectionMap';

export default class ElectionMapContainer extends Component {
    static propTypes = {
        getMap: PropTypes.func.isRequired,
        country: PropTypes.any,
        election: PropTypes.any,
    }

    state = {
        loading: true,
        mapType: "d3",
        map: {}
    }

    componentDidMount() {
        const { getMap } = this.props;
        var { country, election } = this.props;
        
        if(election[0]) {
            election = election[0]
        }

        getMap(
            country.isoCode,
            election.year,
            election.electionType
        ).then(
            (map) => this.setState({ loading: false, map: map })
        ).catch(
            () => console.log("Failure")
        );     
    }


    render() {
        var { election } = this.props;

        if(election[0]) {
            election = election[0]
        }

        return !this.state.loading && (
            <ElectionMap data={this.state.map} mapType={this.state.mapType} election={election} />
        )
    }
}