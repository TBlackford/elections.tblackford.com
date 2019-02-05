import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetSpecificCountry } from '_thunks/country';
import AppPageContainer from './AppPageContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetSpecificCountry(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppPageContainer);
