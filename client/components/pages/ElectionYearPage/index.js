import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountryYearElection } from '_thunks/country';
import ElectionYearPageContainer from './ElectionYearPageContainer';

const mapStateToProps = R.pick(['country']);

const mapDispatchToProps = dispatch => ({
    getCountryYearElection: (country, year, election) => dispatch(attemptGetCountryYearElection(country, year, election)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElectionYearPageContainer);
