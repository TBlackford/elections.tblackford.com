import React from 'react';
import PropTypes from 'prop-types';

import TimelineListItem from '../components/TimelineListItem';

import ElectionMap from '../components/ElectionMap';

export default function YearViewSection(props) {
    const { elections, country } = props;

    return(
        <div className="section yearview-section">
            <div className="columns">
                <div className="column is-12 text-left">
                    {/*<TimelineList country={country} elections={elections} />*/}
                    
                    {
                        elections.map(election => {
                            return (
                                <div key={JSON.stringify(election)} className="box">
                                    <div style={{height: "100%"}}>
                                        <ElectionMap country={country} election={election} />
                                    </div>                                    
                                    <TimelineListItem                                        
                                        country={country}
                                        election={election}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}