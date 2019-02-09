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
        country: {}
    }

    componentDidMount() {
        const { getCountry } = this.props;

        getCountry(this.props.match.params.country).then(
            (country) => this.setState({ loading: false, country: country }),
            () => console.log("failure")
        );
    }

    render() {
        console.log(this.state.country);

        return !this.state.loading && (
            <TimelinePage country={this.state.country} />
        );
    }
}