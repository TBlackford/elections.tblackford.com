import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import { attemptGetElection } from '_thunks/election';
import ElectionYearPageContainer from './ElectionYearPageContainer';

const mapStateToProps = R.pick(['country', 'election']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetCountry(country)),
    getElection: (country, year, type) => dispatch(attemptGetElection(country, year, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElectionYearPageContainer);
