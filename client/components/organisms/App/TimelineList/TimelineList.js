import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import VoteSummaryBars from '_molecules/App/VoteSummaryBars';
import ResultsBar from '_molecules/App/ResultsBar';
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
                            <b>
                                <Link to={"/" + country.isoCode.toLowerCase() + "/v/" + election.year}>{election.year}</Link> - {type}                                     
                            </b>
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

    return(
        <div className="timelinelist">
            <div className="tabs is-centered">
                <ul>
                    <li className="is-active"><a>Simple</a></li>
                    <li><a>Detailed</a></li>
                </ul>
            </div>
        </div>
    )

    /*return (
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
    );//*/
}

TimelineList.propTypes = {
    elections: PropTypes.any.isRequired,
};
