import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import CountryListPage from './CountryListPage';

export default class CountryListPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
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
        return !this.state.loading && (
            <CountryListPage />
        );
    }
}
