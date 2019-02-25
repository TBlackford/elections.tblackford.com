import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import CountryListPage from './CountryListPage';

export default class CountryListPageContainer extends Component {
    static propTypes = {
        getCountries: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
    }

    componentDidMount() {
        const { getCountries } = this.props;

        getCountries().then(
            () => this.setState({ loading: false }), 
            () => console.log("failure")
        );        
    }

    render() {
        return !this.state.loading && (
            <CountryListPage />
        );
    }
}
