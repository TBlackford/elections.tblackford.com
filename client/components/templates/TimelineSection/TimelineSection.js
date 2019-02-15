import React from 'react';
import * as R from 'ramda';

// Move this to the App folder
import TimelineList from '_organisms/TimelineList';

export default function TimelineSection({ country }) {
    // Here, I need to determine how many types of elections happened
    
    return (
        <div className="section timeline-section">
            <div className="columns">
                <div className="column is-12 text-left">           
                    <TimelineList country={country} />
                </div>
            </div>
        </div>
    );
}
