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
        var electionTypes = []

        elements.push(
            <div className="box">
                {
                    elections.map((election, i) => {
                        electionTypes.push(election.electionType);
                        return (
                            <div>
                                <TimelineListItem 
                                    key={JSON.stringify(election)}
                                    election={election}
                                    country={country}
                                />
                                <hr style={{display: ((i === elections.length - 1) ? "none" : "block")}} />
                            </div>
                        )
                    })
                }
            </div>
        )         

        // reduce the election types down
        electionTypes = electionTypes.filter(function(item, pos) {
            return electionTypes.indexOf(item) == pos;
        });

        return { elements, electionTypes };
    }

    render() {
        console.log(this.props);

        var elections = this.props.elections.reverse();
        var { elements, electionTypes } = this.makeTimelineItems(elections, this.props.country);

        return (
            <TimelineList elements={elements} electionTypes={electionTypes} />
        )
    }
}