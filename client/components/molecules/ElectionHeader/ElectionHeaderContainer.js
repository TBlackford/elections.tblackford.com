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
            var yearTag = <Link to={"/" + isoCode.toLowerCase() + "/votes/" + year}>{year}</Link>
            var splitType = type.split(' ').join('_');
            var typeTag = <Link to={"/" + isoCode.toLowerCase() + "/votes/" + year + "/" + splitType}>{type}</Link>
        }

        return(
            <ElectionHeader year={yearTag || type} type={typeTag || type} votingSystem={votingSystem} />
        )
    }
}