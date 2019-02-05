import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            result += this.props.parties[i].seats;
        }

        return result;
    }

    getWidth = (party) => {
        const total = this.sum();
        const partySeats = parseInt(party.seats);
        var width = partySeats / total * 100;

        width = width.toString() + "%";

        return width;
    }

    getBar = (theStyle, text) => {
        return (
            <div style={theStyle}>
                <b>{text}</b>
            </div>
        )
    }

    makeSegments = (elements, parties, showName) => {
        var widths = {};

        // First, get the coloured segments
        for (var party in parties) {
            widths[party] = this.getWidth(parties[party]);
            var colouredStyle = {
                height: "24px",
                width: widths[party],
                backgroundColor: parties[party].colour,
                color: "white",
                fontSize: "12px",
                textAlign: "center",
                lineHeight: "2",
                verticalAlign: "middle"
            }
            elements.push(this.getBar(colouredStyle, parties[party].seats));
        }

        if (showName) {
            elements.push(<br />);

            for (var party in parties) {
                
                var textStyle = {
                    height: "24px",
                    width: widths[party],
                    overflow: "hidden",
                    fontSize: "12px",
                    textAlign: "center",
                    lineHeight: "2",
                    verticalAlign: "middle"
                }

                if (Math.floor(parseFloat(widths[party])) <= parties[party].name.length) {
                    textStyle = Object.assign(textStyle, {opacity: "0"})
                }

                elements.push(this.getBar(textStyle, parties[party].name));       
                   
            }
        }

        return elements;
    }

    render() {
        var elements = [];

        elements = this.makeSegments(elements, this.props.parties, this.props.showName);

        return (
            <ResultsBar segments={elements} showArrow={this.props.showArrow} />
        )
    }
}