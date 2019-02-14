import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YearViewPage from './YearViewPage';

import { getNameFromCode } from '_utils/isoCodes';

export default class YearViewPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
        year: {}
    }

    componentDidMount() {
        const { getCountry } = this.props;
        const country = this.props.match.params.country;
        const year = this.props.match.params.year

        getCountry({ 
            country: country, 
            year: year 
        }).then(
            (years) => {
                this.setState({loading: false, year: years});
                document.title = "Election Histories | " + getNameFromCode(country) + " " + year;
            },
            () => console.log("Failure")
        ).catch(() => console.log("Failure"));
    }

    render() {
        return (
            <YearViewPage year={this.state.year} />
        )        
    }
}