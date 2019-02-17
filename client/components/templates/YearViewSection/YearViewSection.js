import React from 'react';
import PropTypes from 'prop-types';

import TimelineList from '_organisms/TimelineList';

export default function YearViewSection(props) {
    const { year, elections, country } = props;

    return(
        <div className="section yearview-section">
            <div className="columns">
                <div className="column is-12 text-left">
                    <TimelineList country={country} year={year} elections={elections} />
                </div>
            </div>
        </div>
    );
}