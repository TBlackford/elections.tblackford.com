import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VoteSummaryBars from './VoteSummaryBars';

export default class VoteSummaryBarsContainer extends Component {
    static propTypes = {
        parties: PropTypes.array.isRequired,
        item: PropTypes.string,
        title: PropTypes.string
    }

    state = {
        parties: []   
    }

    componentDidMount = () => {
        this.setState({ 
            parties: this.props.parties
        });

        if(this.props.parties[0].votes != undefined) {
            this.state.parties.sort(this.dynamicSort("seats"));
        } else {
            this.state.parties.sort(this.dynamicSort("votes"));
        }
    }

    sum = (key) => {
        var result = 0;

        for (var i = 0; i < this.state.parties.length; i++) {
            var value = this.state.parties[i][key];
            value = String(value).replace(/,/g, '');
            result += parseInt(value);
        }

        return result;
    }

    makePercentages = () => {
        var percentages = {};        
        
        var totalSeats = this.sum("seats");
        var totalVotes = this.sum("votes");  

        const parties = this.state.parties;

        for (var party in parties) {
            const partySeats = parseInt(String(parties[party].seats).replace(/,/g, ''));
            const partyVotes = parseInt(String(parties[party].votes).replace(/,/g, ''));

            var seatsPer = partySeats / totalSeats * 100;
            var votesPer = partyVotes / totalVotes * 100;

            seatsPer = seatsPer.toFixed(2).toString() + "%";
            votesPer = votesPer.toFixed(2).toString() + "%"; 
            
            if(seatsPer != "0.00%") {
                percentages[parties[party].name] = {
                    votes: votesPer,
                    seats: seatsPer
                }
            } else {
                percentages[parties[party].name] = {
                    votes: votesPer,
                }
            }

            
        }

        return percentages;
    }

    dynamicSort = (property) => {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            a[property] = parseInt(String(a[property]).replace(/,/g, ''));
            b[property] = parseInt(String(b[property]).replace(/,/g, ''));
            try {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            } catch {
                return result * sortOrder;
            }

            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            a[property] = numberWithCommas(a[property]);
            b[property] = numberWithCommas(b[property]);

            return result * sortOrder;
        }
    }

    render() {
        if(this.props.parties[0].votes != undefined) {
            this.state.parties.sort(this.dynamicSort("votes"));
        } else {
            this.state.parties.sort(this.dynamicSort("seats"));
        }

        var percentages = this.makePercentages();

        return (
            <VoteSummaryBars title={this.props.title} item={this.props.item} totals={this.state.parties} percentages={percentages} />
        )
    }
}