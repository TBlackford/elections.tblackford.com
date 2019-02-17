import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ElectionYearPage from './ElectionYearPage';

export default class ElectionYearPageContainer extends Component {
    static propTypes = {
        getCountryYearElection: PropTypes.func.isRequired,
    }

    state = {
        loading: true,
        election: {}
    }

    componentDidMount() {     
        const { getCountryYearElection } = this.props;
        const { country, year, election } = this.props.match.params;

        getCountryYearElection({
            country: country, 
            year: year, 
            election: election
        }).then(
            (election) => {
                console.log(election);
                this.setState({ loading: false, election: election });
            },
            () => console.log("failure")
        );
    }

    render() {
        return !this.state.loading && (
            <ElectionYearPage election={this.state.election} />
        );
    }
}