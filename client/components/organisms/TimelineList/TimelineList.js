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

    // This is computationally expensive and I intend on fixing it with pagination in the future
    return (
        <div className="timelinelist">
            {
                elections.map((election, i) => {
                    return (
                        <div key={JSON.stringify(i)} className="box">
                            {
                                Object.keys(election).map((year, j) => {
                                    if(election[year]) {
                                        return (
                                            <div key={JSON.stringify(election[year])}>
                                                <TimelineListItem                                 
                                                    election={election[year]}
                                                    country={country}
                                                />
                                                <hr style={{display: ((j === Object.keys(election).length - 2) ? "none" : "block")}} />
                                            </div>
                                        );
                                    }
                                })
                            }
                            
                        </div>
                    )    
                })
            }
        </div>
    );
}

TimelineList.propTypes = {
    elections: PropTypes.any.isRequired,
    country: PropTypes.any.isRequired,
};
