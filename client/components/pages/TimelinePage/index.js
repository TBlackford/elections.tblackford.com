import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetSpecificCountry } from '_thunks/country';
import TimelinePageContainer from './TimelinePageContainer';

const mapStateToProps = R.pick(['country']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetSpecificCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePageContainer);
