import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import VoteSummaryBars from '_molecules/VoteSummaryBars';
import ResultsBar from '_molecules/ResultsBar';
import SeatChart from '_molecules/SeatChart';

export default function USATimelineList(props) {
    var { country, elections } = props;  

    return (
        <div className="timelinelist">
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active"><a>Simple</a></li>
                    <li><a>Detailed</a></li>
                </ul>
            </div>
            
            <p>USA elections</p>
        </div>
    );
}