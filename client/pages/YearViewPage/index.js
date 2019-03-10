import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import { attemptGetElectionsYear } from '_thunks/elections';
import { attemptGetElectoratesYearType } from '_thunks/electorates';
import YearViewPageContainer from './YearViewPageContainer';

const mapStateToProps = R.pick(['country', 'elections', 'electorates']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetCountry(country)),
    getElectionsYear: (country, year) => dispatch(attemptGetElectionsYear(country, year)),
    getElectoratesYearType: (country, year, type) => dispatch(attemptGetElectoratesYearType(country, year, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(YearViewPageContainer);
