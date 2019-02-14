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

export default function TimelineList(props) {
    var { country, elections } = props;  
    var type;

    // If it's an object with one key
    if(Object.keys(elections).length == 1) {
        type = Object.keys(elections)[0];
        elections = elections[Object.keys(elections)[0]];
    }//*/

    return (
        <div className="timelinelist">
            {/*TODO: move this tab section to an organism*/}
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active"><a>Simple</a></li>
                    <li><a>Detailed</a></li>
                </ul>
            </div>
            {
                elections.map(election => {
                    type = election.type || type;

                    return (
                        <div className="box">
                            <TimelineListItem 
                                key={JSON.stringify(election)}
                                electionType={type}
                                election={election}
                                country={country}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

TimelineList.propTypes = {
    elections: PropTypes.any.isRequired,
};
