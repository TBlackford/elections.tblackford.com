import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import VoteSummaryBars from '_molecules/App/VoteSummaryBars';
import ResultsBar from '_molecules/App/ResultsBar';
import SeatChart from '_molecules/SeatChart';

export default function TimelineList(props) {
    const { elections } = props;

    console.log(elections);

    return (
        <div className="timelinelist" style={{ width: "100%" }}>
            {
                elections.map(
                    (election) => {
                        try {
                            if(election.totals[0].votes !== undefined) {
                                var vsb_popvote = <VoteSummaryBars key={election.year} parties={election.totals} item={"votes"} title={"Popular Vote"} />
                            } else {
                                var vsb_popvote = <div />
                            }
                        } catch {
                            // Don't do this
                        }

                        return (
                            <div className="">
                                <b>{election.year} - {election.type}</b>
                                <div className="column is-12" style={{ display: "flex" }}>
                                    <div className="column is-8">
                                        {vsb_popvote}
                                        <VoteSummaryBars key={election.year} parties={election.totals} item={"seats"} title={"Seat Percentage"} />
                                    </div>
                                    <div className="column is-4" style={{ verticalAlign: "middle"}}>
                                        <SeatChart key={election.year} parties={election.totals} />
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <ResultsBar
                                        key={election.year}
                                        parties={election.totals}
                                        showName={true} />
                                    <hr />
                                </div>
                            </div>
                        );
                    }
                )
            }
        </div>
    );
}

TimelineList.propTypes = {
    elections: PropTypes.any.isRequired,
};
