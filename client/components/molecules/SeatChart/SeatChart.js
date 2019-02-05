import React from 'react';
import PropTypes from 'prop-types';

// Temporary measure
import ParliamentSeats from './ParliamentSeats';

export default function SeatChart(props) {
    const { parties, seats } = props;

    return (
        <div className="seats">
            <ParliamentSeats layout={"half-circle"} parliament={parties} seats={seats} />
        </div>
    );
}

SeatChart.defaultProps = {
    parties: {},
    seats: 0
}

SeatChart.propTypes = {
    parties: PropTypes.any,
    seats: PropTypes.number
}

