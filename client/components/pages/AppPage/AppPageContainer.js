import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import AppPage from './AppPage';

export default class AppPageContainer extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired
    }

    render() {
        var match = this.props.match;
        return (
            <AppPage location={this.props.location} match={match}/>
        )
    }

}