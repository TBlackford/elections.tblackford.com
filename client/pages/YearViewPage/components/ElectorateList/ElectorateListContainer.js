import React, { Component } from 'react';
import PropTypes from 'prop-types';
import R from '_utils/ramda';
import ElectorateList from './ElectorateList';

export default class ElectorateListContainer extends Component {

    render() {
        const electorates = this.props.electorates.filter(electorate => electorate.type.electorate == "State");

        return electorates.map(electorate => {
            return (
                <ElectorateList electorate={electorate}/>
            );
        });
    }
}