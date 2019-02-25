import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

import TimelineList from './TimelineList';

import TimelineListItem from '_molecules/TimelineListItem';

export default class TimelineListContainer extends Component {
    static propTypes = {
        country: PropTypes.shape({}).isRequired,
        elections: PropTypes.any
    }

    makeTimelineItems = (elections, country) => {
        var elements = [];
        var electionTypes = [];

        elections.map((election, i) => {
            electionTypes.push(election.electionType);
            elements.push(
                <div className="box">
                    <TimelineListItem 
                        key={JSON.stringify(election)}
                        election={election}
                        country={country}
                    />
                </div>
            );
        });     

        // reduce the election types down
        electionTypes = electionTypes.filter(function(item, pos) {
            return electionTypes.indexOf(item) == pos;
        });

        return { elements, electionTypes };
    }

    render() {
        var elections = this.props.elections;
        //var { elements, electionTypes } = this.makeTimelineItems(elections, this.props.country);

        return (
            <TimelineList elections={elections} country={this.props.country} />
        )
    }
}