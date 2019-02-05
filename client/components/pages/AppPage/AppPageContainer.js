import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppPage from './AppPage';

export default class AppPageContainer extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
        }).isRequired,
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
            <AppPage match={this.props.match} countries={this.props.country} />
        )
    }
}