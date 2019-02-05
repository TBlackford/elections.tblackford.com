import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppPage from './AppPage';
import { Redirect } from 'react-router';

export default class AppPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
        failed: false,
    }

    componentDidMount() {
        const { getCountry } = this.props;

        const country = this.props.match.params.country;

        getCountry(country).then(
            () => this.setState({ loading: false }),
            () => this.setState({ failed: true })
        );
    }    

    render() {      
        if(this.state.failed) {
            return (
                <Redirect to="/404" />
            )
        }

        return !this.state.loading && (
            <AppPage match={this.props.match} />
        )
    }
}