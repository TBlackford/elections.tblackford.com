import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { distanceInWordsToNow } from 'date-fns';
import CountryCard from './CountryCard';

export default class CountryCardContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isoCode: PropTypes.string.isRequired,
        continent: PropTypes.string.isRequired,
        flagUrl: PropTypes.string.isRequired,
    }

    render() {
        return (
            <CountryCard 
                id={this.props.id}
                name={this.props.name}
                isoCode={this.props.isoCode}
                continent={this.props.continent}
                flagUrl={this.props.flagUrl}
            />
        );
    }
}
