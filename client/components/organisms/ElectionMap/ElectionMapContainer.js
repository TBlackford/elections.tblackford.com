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
        map: {}
    }

    componentDidMount() {
        const { getMap } = this.props;
        const { country, election } = this.props;

        getMap(
            country.isoCode,
            election.year,
            election.electionType
        ).then(
            (map) => this.setState({ loading: false, map: map })
        ).catch(() => console.log("Failure"));
    }

    render() {
        return !this.state.loading && (
            <ElectionMap data={this.state.map} />
        )
    }
}