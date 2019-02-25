import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountries } from '_thunks/countries';
import CountryDropdown from './CountryDropdown';

const mapStateToProps = R.pick(['countries']);

const mapDispatchToProps = dispatch => ({
    getCountries: () => dispatch(attemptGetCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropdown);
