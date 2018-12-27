import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router';

import TimelinePage from '_pages/App/TimelinePage';

/*

Subroute switches:
/i/ -- Used for information on counties, states, and countries (maybe redundant)
/c/ -- Used for information on candidates
/v/ -- Used for information on elections

elections.tblackford.com/app/<country>/ -- Links to other 3 stuff. Do not implement yet.

elections.tblackford.com/app/<country>/v/timeline/ -- Election history timeline
elections.tblackford.com/app/<country>/v/<year>/ -- Information on elections in that nation for that year
elections.tblackford.com/app/<country>/v/<year>/<election>/ -- Information for that election on that year
elections.tblackford.com/app/<country>/v/<year>/<election>/<electorate>/ -- Information for that election on that year

elections.tblackford.com/app/<country>/c/all -- List of all candidates
elections.tblackford.com/app/<country>/c/<candidate_name> -- Information on candidate

elections.tblackford.com/app/<country>/i/ -- Information on the country
elections.tblackford.com/app/<country>/i/<year>/
elections.tblackford.com/app/<country>/i/<year>/<election>/
elections.tblackford.com/app/<country>/i/<year>/<election>/<electorate>/
<Route path="/app/" component={() => <Redirect to={'/app/' + country + '/v/timeline'} />} /> 
*/

export default function AppPage(props) {
    const { location, match } = props;
    console.log(match)
    return (
        <div className="app-page page">
            <div className="section">
                <div className="container">
                    <Switch>
                        <Route path={`${match.path}/v/timeline`} component={TimelinePage} />   


                        <Route path="*" component={() => <p>Not found</p>} />              
                    </Switch>
                </div>
            </div>
        </div>
    )
}

AppPage.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    //country: PropTypes.string
};
