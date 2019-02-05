import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

export default function VoteSummaryBars(props) {
    const { title, totals, percentages, item } = props;

    return (
        <div className="vote-summary column is-12" >
            <div className="vs-title">
                <b>{title}</b>
            </div>
            <br />
            {
                R.reverse(totals).map(total => {
                    return (
                        <div key={total.name + total.votes + total.seats} className="columns">
                            <div className="column is-2">
                                <p>{total.name}</p>
                            </div>
                            <div className="column is-9">
                                <div style={{ height: "19px", width: percentages[total.name][item], backgroundColor: total.colour}} />
                            </div>
                            <div className="column is-1">
                                <p>{percentages[total.name][item]}</p>
                            </div>
                        </div>  
                    );
                })
            }
        </div>
    )
}