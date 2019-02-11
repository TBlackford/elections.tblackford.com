import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ElectionHeader from './ElectionHeader';

export default class ElectionHeaderContainer extends Component {
    static propTypes = {
        year: PropTypes.string,
        type: PropTypes.string,
        votingSystem: PropTypes.string,
        isoCode: PropTypes.string,
        isLink: PropTypes.bool
    };

    render() {
        const { year, type, votingSystem, isoCode, isLink } = this.props;

        if(isLink) {
            var yearTag = <Link to={"/" + isoCode + "/votes/" + year}>{year}</Link>
        } else {
            var yearTag = year
        }

        return(
            <ElectionHeader year={yearTag} type={type} votingSystem={votingSystem} />
        )
    }
}