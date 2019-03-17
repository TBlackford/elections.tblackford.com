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
            () => this.setState({ loading: true })  
        ).catch((err) => console.log(err));     
        
        getElectionsYear(country, year).then(
            () => this.setState({ loading: true })
        ).catch((err) => console.log(err));

        var type = "Presidential";

        getElectoratesYearType(country, year, type).then(
            () => this.setState({ loading: false })
        ).catch(
            (err) => console.log(err)
        );

    }

    render() {
        return !this.state.loading && (
            <YearViewPage 
                election={this.props.elections[0]} 
                country={this.props.country} 
                electorates={this.props.electorates} />
        )        
    }
}