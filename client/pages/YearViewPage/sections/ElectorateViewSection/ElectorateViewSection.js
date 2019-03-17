import React from 'react';

import ElectorateList from '../../components/ElectorateList';

export default function ElectorateViewSection(props) {
    const { electorates } = props;

    return (
        <div className="section electorate-view-section blackout-on-hover">
            <div className="columns">
                <div className="column is-12 text-left">
                    <div className="box">
                        <ElectorateList electorates={electorates} />
                    </div>   
                </div>                
            </div>
        </div>
    );
}