import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearViewPage from './YearViewPage';

import { getNameFromCode } from '_utils/isoCodes';

export default class YearViewPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        getElectionsYear: PropTypes.func.isRequired,
        country: PropTypes.any,
        elections: PropTypes.any,
    }

    state = {
        loading: true,
    }

    componentDidMount() {
        const { getCountry, getElectionsYear } = this.props;
        const country = this.props.match.params.country;
        const year = this.props.match.params.year;

        console.log(country, year);

        getCountry(country).then(
            () => this.setState({loading: false})  
        ).catch(() => console.log("Failure"));     
        
        getElectionsYear(
            country, 
            year 
        ).then(
            () => this.setState({ loading: false })
        ).catch(() => console.log("Failure"));
    }

    render() {
        return (
            <YearViewPage elections={this.props.elections} country={this.props.country} />
        )        
    }
}