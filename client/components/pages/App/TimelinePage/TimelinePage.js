import React from 'react';

import TimelineSection from '_templates/App/TimelineSection';

export default function Timeline(props) {
    const { country } = props;

    return ( 
        <div className="timeline-page page">
            <TimelineSection country={country}/>
        </div>
    );
}