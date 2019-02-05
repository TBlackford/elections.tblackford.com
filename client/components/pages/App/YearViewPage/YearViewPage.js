import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

export default function YearViewPage(props) {
    const { countries, match } = props;

    var findYearOr404 = (match, countries) => {
        for (var c in countries) {
            console.log(countries[c]);
            if (countries[c].year == match.params.year) {
                return true;
            }
        }

        return false;
    }

    const countryFound = findYearOr404(match, countries);

    if (!countryFound) {
        return (
            <Redirect to="/404" />
        )
    }

    return (
        <div>

        </div>
    )

}