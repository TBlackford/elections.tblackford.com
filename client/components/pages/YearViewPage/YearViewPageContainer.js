import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearViewPage from './YearViewPage';

import { getNameFromCode } from '_utils/isoCodes';

export default class YearViewPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        getCountryYear: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
        elections: {},
        year: '',
        country: {}
    }

    componentDidMount() {
        const { getCountry, getCountryYear } = this.props;
        const country = this.props.match.params.country;
        const year = this.props.match.params.year;

        getCountry({country}).then(
            (country) => {
                this.setState({country: country});                
            } 
        ).catch(() => console.log("Failure"));     
        
        getCountryYear({ 
            country: country, 
            year: year 
        }).then(
            (elections) => {
                this.setState({loading: false, elections: elections, year: year});
                document.title = "Election Histories | " + getNameFromCode(country) + " " + year;
            }
        ).catch(() => console.log("Failure"));
    }

    render() {
        return (
            <YearViewPage year={this.state.year} elections={this.state.elections} country={this.state.country} />
        )        
    }
}