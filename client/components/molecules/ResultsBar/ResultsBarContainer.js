import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bar from '_atoms/Bar';

import ResultsBar from './ResultsBar';

export default class ResultsBarContainer extends Component {
    static propTypes = {
        seats: PropTypes.number,
        parties: PropTypes.any,
        showName: PropTypes.bool,
        showArrow: PropTypes.bool,
    }

    static defaultProps = {
        seats: 0,
        parties: [],
        showName: false,
        showArrow: false,
    }

    sum = () => {
        var result = 0;

        for (var i = 0; i < this.props.parties.length; i++) {
            result += this.props.parties[i].seats || this.props.parties[i].electoralVotes;
        }

        return result;
    }

    getWidth = (party) => {
        const total = this.sum();
        const partySeats = parseInt(party.seats || party.electoralVotes);
        var width = partySeats / total * 100;

        width = width.toString() + "%";

        if(width == NaN) {
            return "0%";
        }

        return width;
    }

    makeSegments = (elements, parties) => {
        for (var party in parties) {
            const width = this.getWidth(parties[party]);
            const colour = parties[party].colour;
            var name = parties[party].name || '';
            if(name == '') {
                var text = parties[party].party;
            } else {
                var text = parties[party].name;
            }
            const number = parties[party].seats || parties[party].electoralVotes;

            if(width != "0%") {
                elements.push(
                    <Bar 
                        key={JSON.stringify(parties[party])}
                        width={width} 
                        colour={colour} 
                        number={number}
                        text={text}
                    />
                );
            }            
        }        

        return elements;
    }

    render() {
        var elements = [];

        elements = this.makeSegments(elements, this.props.parties);        

        return (
            <ResultsBar segments={elements} showArrow={this.props.showArrow} />
        )
    }
}