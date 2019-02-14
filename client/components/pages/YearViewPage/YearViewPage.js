import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import ElectionHeader from '_molecules/ElectionHeader';

import VoteSummaryBars from '_molecules/VoteSummaryBars';
import ResultsBar from '_molecules/ResultsBar';
import SeatChart from '_molecules/SeatChart';

export default function YearViewPage(props) {
    var { year } = props;
    var type;

    if (!year) {
        return (
            <Redirect to="/404" />
        )
    }

    if(Object.keys(year).length == 1) {
        type = Object.keys(year)[0];
        year = year[Object.keys(year)[0]];

        return (
            <div>
                <div className="tabs is-centered">
                    <ul>
                        <li className="is-active"><a>Overview</a></li>
                        <li><a>Detailed</a></li>
                    </ul>
                </div>
                <div className="has-text-centered">
                    <ElectionHeader 
                        year={year.year} 
                        type={year.type || type} 
                        votingSystem={year.votingSystem} 
                        isLink={false} />
                    <div className="box column is-12" style={{ display: "flex" }}>
                        <div className="column is-8">
                        </div>
                        <div className="column is-4" style={{ verticalAlign: "middle"}}>
                            <SeatChart key={year.year} parties={year.totals} />
                        </div>
                    </div>
                    <div className="box column is-12">
                        <ResultsBar
                            key={year.year}
                            parties={year.totals}
                            showName={true} />
                    </div>
                </div>
            </div>
        )
    } else {
        // TODO
        return (
            <div>
                <p>TODO</p>
            </div>
        )
    }    
}