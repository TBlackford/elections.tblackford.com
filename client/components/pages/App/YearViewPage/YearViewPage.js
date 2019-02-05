import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

export default function YearViewPage(props) {
    const { year } = props;

    if (!year) {
        return (
            <Redirect to="/404" />
        )
    }

    return (
        <div>
            <p>Year</p>
        </div>
    )
}