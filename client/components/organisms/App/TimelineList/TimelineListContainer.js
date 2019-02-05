import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimelineList from './TimelineList';

export default class TimelineListContainer extends Component {
    static propTypes = {
        country: PropTypes.shape({}).isRequired,
    }

    render() {
        return (
            <TimelineList elections={this.props.country.elections} />
        )
    }
}