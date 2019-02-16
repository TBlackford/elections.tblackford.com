import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';

import TimelineList from './TimelineList';

import TimelineListItem from '_molecules/TimelineListItem';

export default class TimelineListContainer extends Component {
    static propTypes = {
        country: PropTypes.shape({}).isRequired,
    }

    makeTimelineItems = (elections, country) => {
        var elements = [];
        var electionTypes = []
        var keys = Object.keys(elections).sort().reverse();

        //elections = R.reverse(elections);
        for(var year in keys) {
            elements.push(
                <div className="box">
                    {
                        elections[keys[year]].map((election, i) => {
                            electionTypes.push(election.electionType);
                            return (
                                <div>
                                    <TimelineListItem 
                                        key={JSON.stringify(elections[keys[year]])}
                                        electionType={election.electionType}
                                        election={election}
                                        year={keys[year]}
                                        country={country}
                                    />
                                    <hr style={{display: ((i === elections[keys[year]].length - 1) ? "none" : "block")}} />
                                </div>
                            )
                        })
                    }
                </div>
            )   
        }

        // reduce the election types down
        electionTypes = electionTypes.filter(function(item, pos) {
            return electionTypes.indexOf(item) == pos;
        }).reverse()

        return { elements, electionTypes };
    }

    render() {
        const country = {
            name: this.props.country.name,
            isoCode: this.props.country.isoCode,
            continent: this.props.country.continent,
            flagUrl: this.props.country.flagUrl,
        }

        var elections = this.props.country.elections;
        var { elements, electionTypes } = this.makeTimelineItems(elections, country);

        return (
            <TimelineList elements={elements} electionTypes={electionTypes} />
        )
    }
}