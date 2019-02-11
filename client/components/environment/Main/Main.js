import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Notifications from 'react-notification-system-redux';

import LostPage from '_pages/LostPage';
import CountryListPage from '_pages/CountryListPage';
import AppPage from '_pages/AppPage';

import TimelinePage from '_pages/TimelinePage';
import YearViewPage from '_pages/YearViewPage';

import Navigation from '_organisms/Navigation';
import Footer from '_organisms/Footer';

export default function Main(props) {
    const { location, alerts } = props;
    return (
        <div className="has-navbar-fixed-top">
            <Notifications notifications={alerts} />
            <Navigation pathname={location.pathname} />
            <div className="main container">
                <Switch>
                    <Route exact path="/" component={CountryListPage} />

                    <Route path="/countrylist" component={CountryListPage} />

                    <Route path="/404" component={LostPage} />

                    {/*App Stuff*/}
                    <Route path="/:country/votes/timeline" component={TimelinePage} />         
                    <Route path="/:country/votes/:year" component={YearViewPage} />   

                    <Route path="/:country" component={AppPage} />          
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

Main.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
    alerts: PropTypes.array.isRequired,
};
