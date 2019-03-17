import R from '_utils/ramda';
import { connect } from 'react-redux';
import YearNavContainer from './YearNavContainer'
import { attemptGetAllElectionYears } from '_thunks/elections';

const mapStateToProps = R.pick(['elections']);

const mapDispatchToProps = dispatch => ({
    getAllElectionYears: country => dispatch(attemptGetAllElectionYears(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YearNavContainer);
