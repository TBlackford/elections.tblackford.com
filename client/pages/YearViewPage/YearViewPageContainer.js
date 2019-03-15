import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearViewPage from './YearViewPage';

import { getNameFromCode } from '_utils/isoCodes';

export default class YearViewPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        getElectionsYear: PropTypes.func.isRequired,
        getElectoratesYearType: PropTypes.func.isRequired,
        country: PropTypes.any,
        elections: PropTypes.any,
        electorates: PropTypes.any,
    }

    state = {
        loading: true,
    }

    componentDidMount() {
        const { getCountry, getElectionsYear, getElectoratesYearType } = this.props;
        const country = this.props.match.params.country;
        const year = this.props.match.params.year;

        getCountry(country).then(
            () => this.setState({ loading: false })  
        ).catch(() => console.log("Failure"));     
        
        getElectionsYear(
            country, 
            year 
        ).then(
            () => this.setState({ loading: false })
        ).catch(() => console.log("Failure"));

        var type = "Presidential";

        getElectoratesYearType(
            country, 
            year, 
            type
        ).then(
            () => this.setState({ loading: false })
        ).catch(() => console.log("Failure"));
    }

    render() {
        return !this.state.loading && (
            <YearViewPage 
                elections={this.props.elections} 
                country={this.props.country} 
                electorates={this.props.electorates} />
        )        
    }
}