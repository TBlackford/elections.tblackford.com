import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ElectionYearPage from './ElectionYearPage';

export default class ElectionYearPageContainer extends Component {
    static propTypes = {
        getCountry: PropTypes.func.isRequired,
        getElection: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
    }

    componentDidMount() {     
        const { getElection } = this.props;
        const { country, year, election } = this.props.match.params;

        getElection(
            country, 
            year, 
            election
        ).then(
            () => this.setState({ loading: false }),
            () => console.log("failure")
        );
    }

    render() {
        return !this.state.loading && (
            <ElectionYearPage election={this.state.election} />
        );
    }
}