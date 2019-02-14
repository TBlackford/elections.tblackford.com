import React from 'react';
import CountryList from '_organisms/CountryList';

export default function CountryListSection() {
    document.title = "Election Histories | List of All Countries";
    return (
        <div className="section country-list-section">

            <h1 className="title is-1 has-text-centered">
                Countries
            </h1>
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <CountryList />
                </div>
            </div>
        </div>
    );
}
