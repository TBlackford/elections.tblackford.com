import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

//import YearNav from './components/YearNav';

import YearViewSection from './sections/YearViewSection';
import ElectorateViewSection from './sections/ElectorateViewSection';

export default function YearViewPage(props) {
    var { election, country, electorates } = props;

    if (!election) {
        return (
            <Redirect to="/404" />
        )
    }

    return (
        <div>
            <div className="container has-text-centered year-view">
                <YearViewSection election={election} country={country} electorates={electorates} />
            </div>
            <div className="container has-text-centered electorate-view">
                <ElectorateViewSection electorates={electorates} />
            </div>
        </div>
    )
}