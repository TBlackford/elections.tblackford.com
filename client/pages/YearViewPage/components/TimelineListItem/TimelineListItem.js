import React from 'react';
import PropTypes from 'prop-types';

import ElectionHeader from '_molecules/ElectionHeader';
import ResultsBar from '_molecules/ResultsBar';

export default function TimelineListItem(props) {
    const { election, country } = props;

    console.log(election);

    return (
        <div className="has-text-centered">
            <ElectionHeader 
                year={election.year} 
                electionType={election.electionType} 
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
    election: PropTypes.object,
    country: PropTypes.object,
}
