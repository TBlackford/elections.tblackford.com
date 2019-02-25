import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import { attemptGetElections } from '_thunks/elections';
import TimelinePageContainer from './TimelinePageContainer';

const mapStateToProps = R.pick(['country']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetCountry(country)),
    getElections: country => dispatch(attemptGetElections(country))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePageContainer);
