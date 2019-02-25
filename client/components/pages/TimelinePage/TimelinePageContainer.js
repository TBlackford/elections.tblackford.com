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
    }

    setCountry(country) {
        const { getCountry } = this.props;

        getCountry(country).then(
            () => {
                this.setState({ loading: false });
            },
            () => console.log("failure")
        );
    }

    componentDidMount() {     
        this.setCountry(this.props.match.params.country);
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return !this.state.loading && (
            <TimelinePage />
        );
    }
}