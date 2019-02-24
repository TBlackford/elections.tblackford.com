import React from 'react';

//import TimelineSection from '_templates/TimelineSection';

export default function Timeline(props) {
    const { election } = props;

    return ( 
        <div className="timeline-page page">
            {election.electionType}
        </div>
    );
}