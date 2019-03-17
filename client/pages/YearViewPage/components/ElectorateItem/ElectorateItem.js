import React    from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ElectorateItem(props) {
    const { data } = props;

    const style = {
        borderLeft: "6px solid " + data.colour,
        margin: "0px auto",
        padding: "16px",
        textAlign: "left",
    }

    return (
        <div className="electorate-item" style={style}>
            <div>
                <b>Party:</b> {data.party}
            </div>
            <div>
                <b>Name:</b> {data.candidate}
            </div>
            <div>
                <b>Electoral Votes:</b> {data.electoralVotes}
            </div>
            <div>
                <b>Popular Votes:</b> {data.votes || "0"}
            </div>
        </div>
    )
}

ElectorateItem.PropTypes = {
    data: PropTypes.object.isRequired
}