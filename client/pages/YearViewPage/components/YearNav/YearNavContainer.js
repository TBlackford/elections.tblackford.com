import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import YearNav from './YearNav';

export default class YearNavContainer extends Component {
    static propTypes = {
        country: PropTypes.shape({}).isRequired,
        elections: PropTypes.any.isRequired,
        getAllElectionYears: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
        years: [],
    }

    componentDidMount() {
        const { getAllElectionYears, country } = this.props;

        getAllElectionYears(country.isoCode).then(data => {
            this.setState({loading: false, years: data})
        })//*/
    }

    render() {
        return !this.state.loading && (
            <YearNav years={this.state.years} currentYear={this.props.elections[0].year} />
        );
    }
}