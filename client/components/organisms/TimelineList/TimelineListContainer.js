import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimelineList from './TimelineList';

export default class TimelineListContainer extends Component {
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
            <TimelineList elections={this.props.country.elections} country={country} />
        )
    }
}