import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelinePage from './TimelinePage';

export default class TimelinePageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        country: PropTypes.array,
    }

    state = {
        loading: true,
    }

    componentDidMount() {
        const { getCountry } = this.props;

        getCountry().then(
            () => this.setState({ loading: false }),
            () => console.log("failure")
        );
    }

    render() {
        var country;

        for (var i = 0; i < this.props.country.length; i++) {
            if (this.props.country[i].isoCode.toLowerCase() == this.props.match.params.country.toLowerCase()) {
                country = this.props.country[i];
            }
        }

        return !this.state.loading && (
            <TimelinePage country={country} />
        );
    }
}