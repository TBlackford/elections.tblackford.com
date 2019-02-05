import React from 'react';

// Move this to the App folder
import TimelineList from '_organisms/App/TimelineList';

export default function TimelineSection({ country }) {
    return (
        <div className="section timeline-section">
            <div className="columns">
                <div className="column is-12 text-left">
                    {/*Here, add in a timeline list*/}                 
                    <TimelineList country={country} />
                </div>
            </div>
        </div>
    );
}