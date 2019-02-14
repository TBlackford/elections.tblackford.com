import React from 'react';
import PropTypes from 'prop-types';

export default function ElectionHeader(props) {
    const { year, type, votingSystem } = props;

    return ( 
        <b>{year} - {type} ({votingSystem})</b>
    );
}

ElectionHeader.PropTypes = {
    year: PropTypes.element,
    type: PropTypes.string,
    votingSystem: PropTypes.string,
};
