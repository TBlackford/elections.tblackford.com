import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ElectionHeader from './ElectionHeader';

export default class ElectionHeaderContainer extends Component {
    static propTypes = {
        year: PropTypes.string,
        electionType: PropTypes.any,
        votingSystem: PropTypes.string,
        isoCode: PropTypes.string,
        isLink: PropTypes.bool
    };

    static defaultProps = {
        year: '',
        electionType: '',
        votingSystem: '',
        isoCode: '',
        isLink: false,
    }//*/

    render() {
        const { year, electionType, votingSystem, isoCode, isLink } = this.props;

        if(isLink) {
            var yearTag = <a href={"/" + isoCode.toLowerCase() + "/votes/" + year}>{year}</a>
            var splitType = electionType.split(' ').join('_');
            var typeTag = <a href={"/" + isoCode.toLowerCase() + "/votes/" + year + "/" + splitType}>{electionType}</a>
        }

        return(
            <ElectionHeader year={yearTag || year} electionType={typeTag || electionType} votingSystem={votingSystem} />
        )
    }
}