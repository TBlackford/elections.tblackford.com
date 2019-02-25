import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetCountry } from '_thunks/country';
import { attemptGetElectionsYear } from '_thunks/elections';
import YearViewPageContainer from './YearViewPageContainer';

const mapStateToProps = R.pick(['country', 'elections']);

const mapDispatchToProps = dispatch => ({
    getCountry: country => dispatch(attemptGetCountry(country)),
    getElectionsYear: (country, year) => dispatch(attemptGetElectionsYear(country, year))
});

export default connect(mapStateToProps, mapDispatchToProps)(YearViewPageContainer);
