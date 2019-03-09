import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import TimelineListContainer from './TimelineListContainer';

const mapStateToProps = R.pick(['country', 'elections']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimelineListContainer);
