import React from 'react';
import * as R from 'ramda';

// Move this to the App folder
import TimelineList from '_organisms/App/TimelineList';

export default function TimelineSection({ country }) {
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