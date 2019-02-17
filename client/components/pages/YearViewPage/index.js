import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetSpecificCountry, attemptGetCountryYear } from '_thunks/country';
import YearViewPageContainer from './YearViewPageContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetSpecificCountry(country)),
    getCountryYear: (country, year) => dispatch(attemptGetCountryYear(country, year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YearViewPageContainer);
