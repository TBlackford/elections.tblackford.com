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
    var { elements, electionTypes } = props;  

    return (
        <div className="timelinelist">
            {/*TODO: move this tab section to an organism*/}
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active"><a>All</a></li>
                    {
                        electionTypes.map((type, key) => {
                            return (
                                <li key={key}><a>{type}</a></li>
                            )
                        })
                    }                    
                </ul>
            </div>
            {elements}
        </div>
    );
}

TimelineList.propTypes = {
    elements: PropTypes.any.isRequired,
};
