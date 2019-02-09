import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import VoteSummaryBars from '_molecules/App/VoteSummaryBars';
import ResultsBar from '_molecules/App/ResultsBar';
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

        try {
            if(year.totals[0].votes !== undefined) {
                var vsb_popvote = <VoteSummaryBars key={year.year} parties={year.totals} item={"votes"} title={"Popular Vote"} />
            }
        } catch {
            var vsb_popvote = <div />
        }

        return (
            <div className="box has-text-centered">
                <b>{year.year} - {year.type || type}</b>
                <div className="column is-12" style={{ display: "flex" }}>
                    <div className="column is-8">
                        {vsb_popvote}
                        <VoteSummaryBars key={year.year} parties={year.totals} item={"seats"} title={"Seat Percentage"} />
                    </div>
                    <div className="column is-4" style={{ verticalAlign: "middle"}}>
                        <SeatChart key={year.year} parties={year.totals} />
                    </div>
                </div>
                <div className="column is-12">
                    <ResultsBar
                        key={year.year}
                        parties={year.totals}
                        showName={true} />
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