import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearViewPage from './YearViewPage';

export default class YearViewPageContainer extends Component {
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
        return (
            <YearViewPage countries={this.props.country} match={this.props.match} />
        )        
    }
}