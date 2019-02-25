import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import Bar from '_atoms/Bar';

import ElectionHeader from '_molecules/ElectionHeader';
import TimelineListItem from '_molecules/TimelineListItem';
import VoteSummaryBars from '_molecules/VoteSummaryBars';
import ResultsBar from '_molecules/ResultsBar';
import SeatChart from '_molecules/SeatChart';

//<li className="is-active"><a>Simple</a></li>
///<li><a>Detailed</a></li>

export default function TimelineList(props) {
    var { elections, country } = props;  

    return (
        <div className="timelinelist">
            {
                elections.map((election, i) => {
                    return (
                        <div key={JSON.stringify(election)} className="box">
                            <TimelineListItem                                 
                                election={election}
                                country={country}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}

TimelineList.propTypes = {
    elections: PropTypes.any.isRequired,
    country: PropTypes.any.isRequired,
};
