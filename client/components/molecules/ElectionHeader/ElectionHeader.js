import React from 'react';
import PropTypes from 'prop-types';

export default function ElectionHeader(props) {
    const { year, electionType, votingSystem } = props;

    return ( 
        <b>{year} - {electionType} ({votingSystem})</b>
    );
}

ElectionHeader.propTypes = {
    year: PropTypes.element,
    electionType: PropTypes.any,
    votingSystem: PropTypes.string,
};
