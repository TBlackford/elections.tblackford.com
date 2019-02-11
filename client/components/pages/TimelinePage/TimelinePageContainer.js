import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelinePage from './TimelinePage';

export default class TimelinePageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        country: PropTypes.any,
    }

    state = {
        loading: true,
        country: {}
    }

    setCountry(country) {
        const { getCountry } = this.props;

        getCountry(country).then(
            (country) => this.setState({ loading: false, country: country }),
            () => console.log("failure")
        );
    }

    componentDidMount() {     
        this.setCountry(this.props.match.params.country);
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if(nextProps.match.params.country != this.state.country.name) {
            this.setCountry(nextProps.match.params.country);
        }
    }

    render() {
        return !this.state.loading && (
            <TimelinePage country={this.state.country} />
        );
    }
}