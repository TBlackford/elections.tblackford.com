import React from 'react';
import * as R from 'ramda';

// Move this to the App folder
import TimelineList from '_organisms/App/TimelineList';
import USATimelineList from '_organisms/App/USATimelineList';

export default function TimelineSection({ country }) {
    // Here, I need to determine how many types of elections happened

    // Some nations are specialised
    // The ISO code is needed for these nations
    const getCorrectTimeline = () => {
        switch(country.isoCode) {
            case "US": return <USATimelineList country={country} />
        }

        return <TimelineList country={country} />
    }

    
    return (
        <div className="section timeline-section">
            <div className="columns">
                <div className="column is-12 text-left">           
                    {getCorrectTimeline()}
                </div>
            </div>
        </div>
    );
}
