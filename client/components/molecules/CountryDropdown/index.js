import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import CountryDropdown from './CountryDropdown';

const mapStateToProps = R.pick(['country']);

const mapDispatchToProps = dispatch => ({
    getCountry: () => dispatch(attemptGetCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropdown);
