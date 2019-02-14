import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Notifications from 'react-notification-system-redux';

import LostPage from '_pages/LostPage';
import CountryListPage from '_pages/CountryListPage';
import AppPage from '_pages/AppPage';

import TimelinePage from '_pages/TimelinePage';
import ElectionYearPage from '_pages/ElectionYearPage';
import YearViewPage from '_pages/YearViewPage';

import Navigation from '_organisms/Navigation';
import Footer from '_organisms/Footer';

/*

Subroute switches:
/i/ -- Used for information on counties, states, and countries (maybe redundant)
/c/ -- Used for information on candidates
/v/ -- Used for information on elections

elections.tblackford.com/app/<country>/ -- Links to other 3 stuff. Do not implement yet.

elections.tblackford.com/app/<country>/votes/timeline/ -- Election history timeline
elections.tblackford.com/app/<country>/votes/<year>/ -- Information on elections in that nation for that year
elections.tblackford.com/app/<country>/votes/<year>/<election>/ -- Information for that election on that year
elections.tblackford.com/app/<country>/votes/<year>/<election>/<electorate>/ -- Information for that election on that year

elections.tblackford.com/app/<country>/candidate/all -- List of all candidates
elections.tblackford.com/app/<country>/candidate/<candidate> -- Information on candidate

elections.tblackford.com/app/<country>/party/all -- List of all parties
elections.tblackford.com/app/<country>/party/<party> -- Information on party

elections.tblackford.com/app/<country>/info/ -- Information on the country
elections.tblackford.com/app/<country>/info/<year>/
elections.tblackford.com/app/<country>/info/<year>/<election>/
elections.tblackford.com/app/<country>/info/<year>/<election>/<electorate>/

<Route path="/app/" component={() => <Redirect to={'/app/' + country + '/v/timeline'} />} /> 
*/

class Year extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                {this.props.match.params.year}
            </div>
        )
    }
}

class Electorate extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                {this.props.match.params.electorate}
            </div>
        )
    }
}

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
                    <Route path="/:country/votes/:year/:election/:electorate" component={ElectionYearPage} />     
                    <Route path="/:country/votes/:year/:election" component={ElectionYearPage} />  
                    <Route path="/:country/votes/:year" component={YearViewPage} />  

                    <Route path="/:country/candidate/all" component={Year} />  
                    <Route path="/:country/candidate/:candidate" component={Year} />     

                    <Route path="/:country/party/all" component={Year} /> 
                    <Route path="/:country/party/:party" component={Year} /> 

                    <Route path="/:country/info/:year(\d+)/:election/:electorate" component={Year} />  
                    <Route path="/:country/info/:year(\d+)/:election" component={Year} />    
                    <Route path="/:country/info/:year(\d+)" component={Year} />  
                      
                    <Route path="/:country/info/:electorate(\w+)" component={Electorate} />  
  
                    <Route path="/:country/" component={Electorate} />   
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
