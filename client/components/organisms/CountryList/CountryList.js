import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import CountryCard from '_molecules/CountryCard';

export default function CountryList({ country }) {
    return (
        <ul className="country-list columns box flexbox-container">
            {R.reverse(country).map(c => <CountryCard key={c.id} {...c} />)}
        </ul>
    );
}

CountryList.propTypes = {
    country: PropTypes.arrayOf(PropTypes.object).isRequired,
};
