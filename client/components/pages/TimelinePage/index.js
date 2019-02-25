import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import TimelinePageContainer from './TimelinePageContainer';

const mapStateToProps = R.pick(['country']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePageContainer);
