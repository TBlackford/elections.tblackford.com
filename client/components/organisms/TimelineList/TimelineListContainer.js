import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

import TimelineList from './TimelineList';

import TimelineListItem from '_molecules/TimelineListItem';

export default class TimelineListContainer extends Component {
    static propTypes = {
        country: PropTypes.shape({}).isRequired,
        elections: PropTypes.any
    }

    render() {
        return (
            <TimelineList elections={this.props.elections} country={this.props.country} />
        )
    }
}