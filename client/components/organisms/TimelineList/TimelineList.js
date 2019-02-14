import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import ElectionHeader from '_molecules/ElectionHeader';

import VoteSummaryBars from '_molecules/VoteSummaryBars';
import ResultsBar from '_molecules/ResultsBar';
import SeatChart from '_molecules/SeatChart';

export default function TimelineList(props) {
    var { country, elections } = props;  
    var type;

    if(Object.keys(elections).length == 1) {
        type = Object.keys(elections)[0];
        elections = elections[Object.keys(elections)[0]];
    }

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
                        <div className="box has-text-centered">
                            <ElectionHeader 
                                year={election.year} 
                                type={election.type || type} 
                                votingSystem={election.votingSystem} 
                                isoCode={country.isoCode}
                                isLink={true} />
                            <div className="column is-12">
                                <ResultsBar
                                    key={election.year}
                                    parties={election.totals}
                                    showName={true} />
                            </div>
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
