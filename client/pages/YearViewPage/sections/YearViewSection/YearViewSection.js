import React from 'react';
import PropTypes from 'prop-types';

import TimelineListItem from '../../components/TimelineListItem';
import ElectionMap from '../../components/ElectionMap';

export default function YearViewSection(props) {
    const { election, country, electorates } = props;

    console.log(election);

    return(
        <div className="section year-view-section blackout-on-hover">
            <div className="columns">
                <div className="column is-12 text-left">
                    <div className="box">
                        <div style={{height: "100%"}}>
                            <ElectionMap country={country} election={election} electorates={electorates} />
                        </div>                                    
                        <TimelineListItem country={country} election={election} />
                    </div>
                </div>
            </div>
        </div>
    );
}