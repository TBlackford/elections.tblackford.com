import React from 'react';

//import TimelineSection from '_templates/TimelineSection';

export default function Timeline(props) {
    const { election } = props;

    console.log(election);

    return ( 
        <div className="timeline-page page">
            {election.electionType}
        </div>
    );
}