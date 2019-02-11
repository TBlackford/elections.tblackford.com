import React, { Component } from 'react';
import PropTypes from 'prop-types';

import USATimelineList from './USATimelineList';

export default class USATimelineListContainer extends Component {
    static propTypes = {
        country: PropTypes.shape({}).isRequired,
    }

    render() {
        const country = {
            name: this.props.country.name,
            isoCode: this.props.country.isoCode,
            continent: this.props.country.continent,
            flagUrl: this.props.country.flagUrl,
        }

        return (
            <USATimelineList elections={this.props.country.elections} country={country} />
        )
    }
}