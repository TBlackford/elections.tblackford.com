import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelinePage from './TimelinePage';

export default class TimelinePageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        getElections: PropTypes.func.isRequired,
        country: PropTypes.any,
        elections: PropTypes.any,
    }

    state = {
        loading: true,
    }

    setCountry(country) {
        const { getCountry, getElections } = this.props;

        getCountry(country).then(
            () => this.setState({ loading: false }),
            () => console.log("failure")
        );

        getElections(country).then(
            () => this.setState({ loading: false }),
            () => console.log("failure")
        )
    }

    componentDidMount() {     
        this.setCountry(this.props.match.params.country);
    }

    render() {
        return !this.state.loading && (
            <TimelinePage />
        );
    }
}