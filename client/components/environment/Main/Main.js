import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Notifications from 'react-notification-system-redux';

//import WelcomePage from '_pages/WelcomePage';
import LoginPage from '_pages/LoginPage';
import RegisterPage from '_pages/RegisterPage';
//import HomePage from '_pages/HomePage';
import TodoPage from '_pages/TodoPage';
import SettingsPage from '_pages/SettingsPage';
import LostPage from '_pages/LostPage';
import CountryListPage from '_pages/CountryListPage';
import AppPage from '_pages/AppPage';

import TimelinePage from '_pages/App/TimelinePage';
import YearViewPage from '_pages/App/YearViewPage';

import Navigation from '_organisms/Navigation';
import Footer from '_organisms/Footer';

export default function Main(props) {
    const { location, alerts } = props;
    return (
        <div className="has-navbar-fixed-top">
            <Notifications notifications={alerts} />
            <Navigation pathname={location.pathname} />
            <div className="main">
                <Switch>
                    <Route exact path="/" component={CountryListPage} />

                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />

                    <Route path="/home" component={CountryListPage} />
                    <Route path="/todo" component={TodoPage} />
                    <Route path="/countrylist" component={CountryListPage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/404" component={LostPage} />

                    {/*App Stuff*/}     

                    <Route path="/:country/v/timeline" component={TimelinePage} />         
                    <Route path="/:country/v/:year" component={YearViewPage} />   

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
