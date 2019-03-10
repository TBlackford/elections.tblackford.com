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

    convertToObject(electorates) {
        var newElectorates = {};

        for(var i in electorates) { 
            newElectorates[electorates[i].name] = electorates[i];
        }

        return newElectorates;
    }

    render() {
        var { election, electorates } = this.props;

        if(election[0]) {
            election = election[0]
        }

        electorates = this.convertToObject(electorates);

        console.log(electorates);

        return !this.state.loading && (
            <ElectionMap 
                data={this.state.map} 
                mapType={this.state.mapType} 
                election={election} 
                electorates={electorates} />
        )
    }
}