import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import CountryCard from '_molecules/CountryCard';

export default function CountryList({ countries }) {
    return (
        <ul className="country-list columns flexbox-container">
            {R.reverse(countries).map(country => <CountryCard key={country.id} {...country} />)}
        </ul>
    );
}

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
