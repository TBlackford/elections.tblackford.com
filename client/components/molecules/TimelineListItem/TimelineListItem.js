import React from 'react';
import PropTypes from 'prop-types';

import ElectionHeader from '_molecules/ElectionHeader';
import ResultsBar from '_molecules/ResultsBar';

export default function TimelineListItem(props) {
    const { electionType, election, country } = props;

    return (
        <div className="has-text-centered">
            <ElectionHeader 
                year={election.year} 
                electionType={electionType} 
                votingSystem={election.votingSystem} 
                isoCode={country.isoCode}
                isLink={true} />
            <div className="column is-12">
                <ResultsBar
                    key={election.year}
                    parties={election.totals}
                    showName={true} />
            </div>
        </div>
    );    
}

TimelineListItem.propTypes = {
    electionType: PropTypes.any,
    election: PropTypes.object,
    country: PropTypes.object,
}
